import { useState } from "react"
import styles from '../../styles/Test.module.scss' 
import SideBar from "../../components/SideBar"
export default function TestHome() {

  return (
      <div className={styles.grid}>
        <SideBar/>
      </div>
  )
}