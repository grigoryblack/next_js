import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Button} from "../components/buttons/Button"
import {Radiobutton} from "../components/buttons/Radiobutton"
import {Checkbutton} from "../components/buttons/Checkbutton";
import {Test} from "../components/pages/Test"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>basic-project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/*ссылки слева на вопросы*/}
        {/*переход к следующему вопросу при нажатии на ответить*/}

      <main>
          <Test/>
      </main>
    </div>
  )
}
