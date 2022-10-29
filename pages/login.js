import LogInForm from "../components/LoginForm"
import LoginFooter from "../components/loginfooter"
import Image from "next/image"
import styles from '../styles/Login.module.scss'
import {
  AiOutlineTwitter,
} from 'react-icons/ai' 
export default function LoginPage() {
  
  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.imageContainer}>
          <AiOutlineTwitter className={styles.icon} size={500}/>
        </div>
        <div><LogInForm/></div>
      
      </div>
      <div><LoginFooter/></div>
    </div>
    
  )
}