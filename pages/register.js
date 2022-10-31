import { useSession } from "next-auth/react"
import { useState } from "react"
export default function Register(props) {
  //form control
  const [userName, setUserName] = useState('') 
  const {data:session} = useSession()
  function check(userName) {
    if (userName.length < 3) {
      return 'A little too short, love'
    } else return ''
  }
  return (
    <div>
      <h3>Welcome, {session ? session.user.name.split(' ')[0] : 'user'}! Just one more thing:</h3>
    
    <div className="form-group">
      <form action="/api/makeuser" method='post'>
        <label for="username"></label>
        <input id='username' name='username' type="text" onChange={(event)=> setUserName(event.target.value)} 
        placeholder='Choose a username' />
        <span className='helpertext'>
        {check(userName)}
      </span>
      <button type="submit"> Choices.. </button>
      </form>
    </div>
    </div>
  )
}