import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

PC.init = function () {
  // Initializes the Contentful client with the required credentials for a
  // product catalog space. Feel free to replace them with our own.
  PC.contentfulClient = contentful.createClient({
    accessToken: 'abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abc', // replace the access token
    space: 'klmno09876klmno' // replace the space ID
  })