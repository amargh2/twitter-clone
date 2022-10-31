import { useSession } from "next-auth/react"
import { useState } from "react"
import userNameForm from "../components/usernameform"
import styles from '../styles/Login.module.scss'
import { AiOutlineTwitter } from "react-icons/ai"
import LoginFooter from "../components/loginfooter"
export default function Register(props) {
  const [userName, setUserName] = useState('') 
  const {data:session} = useSession()
  function check(userName) {
    if (userName.length < 3) {
      return 'A little too short, love'
    } else return ''
  }
  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.imageContainer}>
          <AiOutlineTwitter className={styles.icon} size={500}/>
        </div>
      <div className={styles.registrationform}>
        <h3>Welcome, {session ? session.user.name.split(' ')[0] : 'user'}! Just one more thing:</h3>
      
      <div className="form-group">
        <form action="/api/makeuser" method='post'>
          <label for="username"></label>
          <input id='username' name='username' type="text" onChange={(event)=> setUserName(event.target.value)}
          placeholder='Choose a username' />
          <span className='helpertext'>
          {check(userName)}
        </span>
        <div className={styles.registerbuttonContainer}>
          <button className={styles.btn} type="submit"> Let it be so </button></div>
        </form>
      </div>
      </div>
    </div>
    <div><LoginFooter/></div>
    </div>
  )
}