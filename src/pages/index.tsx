import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <Head>
        <title>Inicio | Movit it</title>
      </Head>

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
