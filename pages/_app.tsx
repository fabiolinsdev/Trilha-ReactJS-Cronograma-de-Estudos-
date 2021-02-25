import { useState } from 'react'

import '../styles/global/css'

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1);

  function levelUp() {
    setLevel(level + 1);

  }

  return (
  <ChallengesProvider>
   <Component {...pageProps} />
  </ChallengesProvider>
  )
}

export default MyApp
