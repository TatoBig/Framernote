import Header from 'components/core/Header'
import SignIn from 'components/core/signIn/SignIn'
import SignUp from 'components/core/signIn/SignUp'
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
          className="flex flex-row mt-6 justify-around"
        >
          <div className="flex flex-col w-1/3 mt-32">
            <SignIn />
            <SignUp />
          </div>

          <img src="./notes.gif" className="rounded" />
        </div>
      </div>

      <div className="w-full absolute bottom-0 bg-red-500 h-8 z-0">
        sada
      </div>

    </Fragment>
  )
}
