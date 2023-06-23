import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Welcome from "./Welcome"
import * as styles from "../assets/css/background.module.css" 
import browserImage from "../images/ipad_ls_day.png"
import mobileImage from "../images/wp_ls_day2.png"
import { BrowserView, MobileView } from 'react-device-detect'

export const BackgroundImage = ({ children }) => {
  return (
    <div>

      <BrowserView className={styles.pageDisplay}>
        <StaticImage className={styles.landingWrapperBrowser} src={browserImage} />
        <div className={styles.onTopContent}>
          { children }
        </div>
        <div className={styles.welcome}>
          <Welcome />
        </div>
      </BrowserView>

      <MobileView className={styles.pageDisplay}>
        <StaticImage className={styles.landingWrapperMobile} src={mobileImage} />
        <div className={styles.onTopContent}>
          { children }
        </div>
        <div className={styles.welcomePhone}>
          <Welcome />
        </div>
      </MobileView>

    </div>
  )
}

export default BackgroundImage