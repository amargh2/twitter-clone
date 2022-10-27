import LogInForm from "../components/LoginForm"
import LoginFooter from "../components/loginfooter"
import Image from "next/image"
import styles from '../styles/Login.module.scss'
export default function LoginPage() {
  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.imageContainer}>
          <Image
            src='/twitter.png'
            width={1300}
            height={955}
            alt='Twitter Sign In Page'/>
        </div>
        <div><LogInForm/></div>
      
      </div>
      <div><LoginFooter/></div>
    </div>
    
  )
}