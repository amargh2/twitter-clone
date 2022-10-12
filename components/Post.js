import styles from '../styles/Post.module.scss'
import {BiPoll} from 'react-icons/bi'
import {useState} from 'react'
export default function Post() {

  return (
    <div className={styles.postContainer}>
      <div className='avatar-and-form'>
        <div><img src='/mesmall.jpg'></img></div>
        <div>
          <form action="/">
            <div class="form-group">
              <label for="message"></label>
              <textarea type='text' class="form-control" name="message" id="message" rows="1"  placeholder="What's happening?"></textarea>
            </div>
            <div>
            <div className={styles.tweetcontainer}></div><button className={styles.tweetbutton}>Tweet</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}