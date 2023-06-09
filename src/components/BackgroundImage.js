import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../assets/css/background.module.css" 
import { BrowserView, MobileView } from 'react-device-detect'

export const BackgroundImage = ({ children }) => {
  return (
    <div>

      <BrowserView className={styles.pageDisplay}>
        <StaticImage className={styles.landingWrapperBrowser} src="../images/ipad_ls_day.png" />
        <div className={styles.onTopContent}>
          { children }
        </div>
      </BrowserView>

      <MobileView className={styles.pageDisplay}>
        <StaticImage className={styles.landingWrapperMobile} src="../images/wp_ls_day.png" />
        <div className={styles.onTopContent}>
          { children }
        </div>
      </MobileView>

    </div>
  )
}

export default BackgroundImage