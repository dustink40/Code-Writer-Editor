import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Welcome to a new era of recovery support</Text>
        <Text className="text-zinc-600">
          S.A.R.A. is The SerenityChain AI Recovery Assistant. She was built by OSR to aid those in need of support. In any capacity. She is recovery focused, but capable of of so much more. Go ahead and ask her anything, and start owning your path.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">Chat with S.A.R.A:</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
