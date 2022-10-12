import styles from '../styles/Post.module.scss'
import {BiPoll} from 'react-icons/bi'
import {useState} from 'react'
import Image from 'next/image'
export default function Post() {
  const [formValue, setFormValue] = useState('');
  
  return (
    <div className={styles.postContainer}>
        <Image src='/mesmall.jpg' width={100} height={100} alt='avatar'></Image>
        <form action="/api/post">
            <label for="message"></label>
            <textarea class="form-control" 
              name="message" 
              onChange={event=>setFormValue(event.target.value)} 
              id="message" 
              rows="7" 
              required 
              minlength='10'  
              placeholder="What's happening?">
            </textarea>
            <div>
              <button className={styles.tweetbutton} disabled={formValue === '' ? true:false}>Tweet</button>
          </div>
          </form>
          
      </div>
  )
}