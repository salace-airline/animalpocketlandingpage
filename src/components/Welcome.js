import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../assets/css/welcome.module.css'
import { BrowserView, MobileView } from 'react-device-detect'
import mySVG from "../images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"

export const Welcome = () => {
  return (
    <div>
      <BrowserView className={styles.browserView}>
        <figure className={styles.figure}>
          <StaticImage className={styles.welcomeBubble} src="../images/dialogue_day_2_copie.png" />
          
          <figcaption>
            <h3 className={styles.hello}>Hello 👋</h3>
            <h1 className={styles.pageTitle}>Welcome to <br />Animal Pocket!</h1>
          </figcaption>
              
          <object className={styles.apple} type="image/svg+xml" data={mySVG} width="175" aria-label="download with apple image with link"></object>
        </figure>
      </BrowserView>

      <MobileView className={styles.mobileView}>
        <figure className={styles.mobFigure}>
          <StaticImage className={styles.mobWelcomeBubble} src="../images/dialogue_day_2_copie.png"/>

          <figcaption>
            <h5 className={styles.hello}>Hello 👋</h5>
            <h2 className={styles.mobPageTitle}>Welcome to <br />Animal Pocket!</h2>
          </figcaption>

          <object className={styles.mobApple} type="image/svg+xml" data={mySVG} width="200" aria-label="download with apple image with link"></object>
        </figure>
      </MobileView>
    </div>
  )
}

export default Welcome