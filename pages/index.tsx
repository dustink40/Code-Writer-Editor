import { /*Layout,*/ Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col align-middle gap-12">
      <section className="flex flex-col text-center gap-6">
        <Text variant="h1">Welcome to a new era of writing code</Text>
        <Text className="text-zinc-600 text-center ">
          C.O.D.E.E.X.P.E.R.T is Dustin's Chat-GPT AI code generating Bot. he was built by Dustin Keith to help people in writing code. In any capacity. he is code and programming focused, but capable of so much more. Go ahead and ask him anything, and start planning your project.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">Chat with C.O.D.E.E.X.P.E.R.T:</Text>
        <div className="lg:w-4/4">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

//Home.Layout = Layout

export default Home
