import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../assets/css/welcome.module.css'

export const Welcome = () => {
  return (
    <div className={styles.container}>
      <figure className={styles.figure}>
        <StaticImage className={styles.welcomeBubble} src="../images/dialogue_day_2_copie.png" />
      
        <figcaption>
          <p className={styles.hello}>Hello 👋</p>
          <h1 className={styles.pageTitle}>Welcome to <br />Animal Pocket!</h1>
        </figcaption>
      </figure>
    </div>
  )
}

export default Welcome