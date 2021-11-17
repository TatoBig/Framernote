import Footer from 'components/core/Footer'
import Header from 'components/core/Header'
import SignIn from 'components/signIn/SignIn'
import SignUp from 'components/signIn/SignUp'
import Head from 'next/head'
import { Fragment } from 'react'

export default function Home () {
  return (
    <Fragment>
      <div className="mx-32 mt-4">
        <Head>
          <title>Framernote</title>
          <meta name="Framernote" content="A note app made with Framer" />
          <link rel="icon" href="/icon.ico" />
        </Head>

        <Header />

        <div
          className="flex flex-row mt-2 justify-around"
        >
          <div className="flex flex-col w-1/3 mt-2">
            <SignIn />
            <SignUp />
          </div>

          <img src="./notes.gif" className="rounded" />
        </div>
      </div>

      <Footer />

    </Fragment>
  )
}
