import LogInForm from "../components/LoginForm"
import Image from "next/image"
import styles from '../styles/Login.module.scss'
export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      <div>
        <Image 
          src='/twitter.png' 
          width={1300} 
          height={955} 
          alt='Twitter Sign In Page'/>
      </div>
      <div><LogInForm/></div>
    </div>
    
  )
}