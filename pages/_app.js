import 'styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from 'services/apollo-client'
import { Provider } from 'react-redux'
import store from 'store'

function MyApp ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp
