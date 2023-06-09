import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../assets/css/background.module.css" 

export const BackgroundImage = ({ children }) => {
  const desktopImageSrc = "../images/ipad_ls_day.png";
  const mobileImageSrc = "../images/wp_ls_day.png";
  const imageUrl = window.innerWidth >= 650 ? desktopImageSrc : mobileImageSrc;

  return (
    <div style={{ display: "grid" }}>
      <StaticImage className={styles.landingWrapper} src="../images/ipad_ls_day.png" />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          display: "grid",
        }}
      >
        { children }
      </div>
    </div>
  )
}

export default BackgroundImage