import { /*Layout,*/ Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col align-middle gap-12">
      <section className="flex flex-col text-center gap-6">
        <Text variant="h1">Welcome to a new era of recovery support</Text>
        <Text className="text-zinc-600 text-center ">
          D.E.C.K.E.X.P.E.R.T is Guttermade's Chat-GPT AI construction Assistant. It was built by Dustin Keith and Ryan Fortin to help people in building decks. In any capacity. She is construction focused, but capable of so much more. Go ahead and ask it anything, and start planning your project.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">Chat with D.E.C.K.E.X.P.E.R.T:</Text>
        <div className="lg:w-4/4">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

//Home.Layout = Layout

export default Home
