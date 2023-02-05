import { /*Layout,*/ Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col align-middle gap-12">
      <section className="flex flex-col text-center gap-6">
        <Text variant="h1">Welcome to a new era of recovery support</Text>
        <Text className="text-zinc-600 text-center ">
          S.A.R.A. is Serenim`s AI Recovery Assistant. She was built by OSR to aid those in need of support. In any capacity. She is recovery focused, but capable of so much more. Go ahead and ask her anything, and start owning your path.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">Chat with S.A.R.A:</Text>
        <div className="lg:w-4/4">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

//Home.Layout = Layout

export default Home
