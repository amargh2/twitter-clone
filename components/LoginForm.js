import styles from '../styles/Login.module.scss'
import {
  AiOutlineTwitter,
} from 'react-icons/ai' 
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"


export default function LogInForm() {
  const {data: session} = useSession()
  
  return (
    <div className={styles.loginform}>
      <div className={styles.logoAndCTA}>
        <AiOutlineTwitter size={60} className={styles.icon}/>
        <div className={styles.words}>Happening now</div>
        <div className={styles.wordsSmall}>Join Twitter Today</div>
      </div>

          <div className={styles.buttonContainer}>
         
          <div>
            <button 
              className={styles.btn}
              onClick={() => session ? signOut() : signIn('google', {callbackURL:'http://localhost:3000'})}> 
              Sign up or sign in with Google
            </button>
          </div>
      </div>
     
    </div>
  )
}