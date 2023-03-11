# AI Chat GPT-3 example

This example shows how to implement a simple chat bot using Next.js, API Routes, and [OpenAI API](https://beta.openai.com/docs/api-reference/completions/create).

### Components

- Next.js
- OpenAI API (REST endpoint)
- API Routes (Edge runtime)

## Demo

https://sara02.opensourcerecovery.life

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FB8N4S8N%2FSARA-0.2&env=OPENAI_API_KEY&envDescription=Go%20to%20Open%20AI.%20Sign%20up.%20Go%20to%20%20get%20your%20API%20key.%20%20Enter%20the%20API%20key%20in%20ENV%20Variables%20and%20LFG!!!&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/vercel/examples/tree/main/solutions/ai-chatgpt
# or
yarn create next-app --example https://github.com/vercel/examples/tree/main/solutions/ai-chatgpt
```

#### Set up environment variables

Rename [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

then, update `OPENAI_API_KEY` with your [OpenAI](https://beta.openai.com/account/api-keys) secret key.

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

The app should be up and running at http://localhost:3000.

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).
