import styles from '../styles/HomeBar.module.scss'
import {BsStars} from 'react-icons/bs'
export default function HomeBar() {

  return (
    <div className={styles.homeBar}>
      <h3>Home</h3>
      <BsStars />
    </div>
  )
}