import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../assets/css/welcome.module.css'
import mySVG from "../images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"

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
              
        <object className={styles.apple} type="image/svg+xml" data={mySVG} width="175"></object>
    </div>
  )
}

export default Welcome