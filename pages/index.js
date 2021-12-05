import Footer from 'components/core/Footer'
import Header from 'components/core/Header'
import SignIn from 'components/signIn/SignIn'
import SignUp from 'components/signIn/SignUp'
import Head from 'next/head'
import { Fragment } from 'react'

export default function Home () {
  return (
    <Fragment>
      <div className="md:mx-32 mt-4 pb-20">
        <Head>
          <title>Framernote</title>
          <meta name="Framernote" content="A note app made with Framer Motion" />
          <link rel="icon" href="/icon.ico" />
        </Head>

        <Header />

        <div
          className="md:flex md:flex-row mt-2 md:justify-around mx-4 md:mx-0"
        >
          <div className="flex flex-col md:w-1/3 mt-2">
            <SignIn />
            <SignUp />
          </div>

          <img src="./notes.gif" className="rounded md:block hidden" />
        </div>
      </div>

      <Footer />

    </Fragment>
  )
}
