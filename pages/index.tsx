import Head from  'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdawn } from "../components/Countdawn";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdawn />
        </div>
        <div>
           <ChallengeBox /> 
        </div>
      </section>
    </div>
    
  )
}
