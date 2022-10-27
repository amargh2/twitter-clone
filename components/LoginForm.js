import styles from '../styles/Login.module.scss'
import {
  AiOutlineTwitter,
} from 'react-icons/ai' 
import Image from 'next/image'
export default function LogInForm() {
  return (
    <div className={styles.loginform}>
      <div className={styles.logoAndCTA}>
        <AiOutlineTwitter size={60} className={styles.icon}/>
        <div className={styles.words}>Happening now</div>
        <div className={styles.wordsSmall}>Join Twitter Today</div>
      </div>
      <form action='submit'>
          <label htmlFor='username'></label>
          <input
            type='text'
            required id='username'
            name='username'
            placeholder='Your username'></input>
          <label htmlFor='password'></label>
          <input type='password'
            required
            id='password'
            name='password'
            placeholder='Your password'></input>
          <div className={styles.buttonContainer}>
          <div><button className={styles.btn}>Login</button></div>
          <div><button className={styles.btn}>Not registered? Sign up.</button></div>
      </div>
      </form>
     
    </div>
  )
}