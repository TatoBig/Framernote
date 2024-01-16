import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://framernote-259ca800168f.herokuapp.com/',
  cache: new InMemoryCache()
})

export default client
