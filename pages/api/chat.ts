import { type NextRequest, NextResponse } from 'next/server'
import { initialMessages } from '../../components/Chat'
import { type Message } from '../../components/ChatLine'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

const botName = 'C.O.D.E.E.X.P.E.R.T.'
const userName = 'News reporter' // TODO: move to ENV var
const firstMessge = initialMessages[0].message

// @TODO: unit test this. good case for unit testing
const generatePromptFromMessages = (messages: Message[]) => {
  console.log('== INITIAL messages ==', messages)

  let prompt = ''

  // add first user message to prompt
  prompt += messages[1].message

  // remove first conversaiton (first 2 messages)
  const messagesWithoutFirstConvo = messages.slice(2)
  console.log(' == messagesWithoutFirstConvo', messagesWithoutFirstConvo)

  // early return if no messages
  if (messagesWithoutFirstConvo.length == 0) {
    return prompt
  }

  messagesWithoutFirstConvo.forEach((message: Message) => {
    const name = message.who === 'user' ? userName : botName
    prompt += `\n${name}: ${message.message}`
  })
  return prompt
}

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  // read body from request
  const body = await req.json()

  // const messages = req.body.messages
  const messagesPrompt = generatePromptFromMessages(body.messages)
  const defaultPrompt = `Your Name is C.O.D.E.E.X.P.E.R.T. Short for Computational Excellence and Problem-solving Expert. You are a world class programmer. Your expertise in writing full complete code that will run without errors is considered the best in the world your ability to take the input from a user and create the code they want is considered legendary. ${botName}: `
  const finalPrompt = process.env.AI_PROMPT
    ? `${process.env.AI_PROMPT}${messagesPrompt}\n${botName}: `
    : defaultPrompt

  const payload = {
    model: 'text-davinci-003',
    prompt: finalPrompt,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.9,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 800,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: [`${botName}:`, `${userName}:`],
    user: body?.user,
  }

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  }

  if (process.env.OPENAI_API_ORG) {
    requestHeaders['OpenAI-Organization'] = process.env.OPENAI_API_ORG
  }

  const response = await fetch('https://api.openai.com/v1/completions', {
    headers: requestHeaders,
    method: 'POST',
    body: JSON.stringify(payload),
  })

  const data = await response.json()

  if (data.error) {
    console.error('OpenAI API error: ', data.error)
    return NextResponse.json({
      text: `ERROR with API integration. ${data.error.message}`,
    })
  }

  // return response with 200 and stringify json text
  return NextResponse.json({ text: data.choices[0].text })
}
