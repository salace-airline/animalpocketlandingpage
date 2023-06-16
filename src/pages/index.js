import * as React from "react"
import Layout from '../components/layout'
import * as styles from '../assets/css/homePage.module.css'
import BackgroundImage from "../components/BackgroundImage"

const Greeting = () => {
  return (
    <BackgroundImage>
      <Layout>
        <div className={styles.container}>
        </div>
      </Layout>
    </BackgroundImage>
  )
}

export default Greeting

export const Head = () => <title>Animal Pocket</title>
