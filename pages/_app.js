import { StateWarapper } from '../components/stateWrapper'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateWarapper>
      <Component {...pageProps} />
    </StateWarapper>
  )
}

export default MyApp
