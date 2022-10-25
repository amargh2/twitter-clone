import styles from '../styles/Login.module.scss'
import {
  AiOutlineTwitter,
} from 'react-icons/ai' 
import Image from 'next/image'
export default function LogInForm() {
  return (
    <div className={styles.loginform}>
      <form action='submit'>
          <AiOutlineTwitter size={60} className={styles.icon}/>
          <div className={styles.words}>Happening now</div>
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
        <div><button>Login</button></div>
      </form>
    </div>
  )
}