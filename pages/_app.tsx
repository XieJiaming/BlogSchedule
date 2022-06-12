import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
