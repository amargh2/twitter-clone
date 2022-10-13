import styles from '../styles/Post.module.scss'
import {BiPoll} from 'react-icons/bi'
import {AiOutlineBarChart} from 'react-icons/ai'
import {useState} from 'react'
import Image from 'next/image'
export default function Post() {
  const [formValue, setFormValue] = useState('');
  
  return (
    <div className={styles.postContainer}>
          <div className={styles.avatar}>
            <Image src='/mesmall.jpg' height={30} width={100} alt='avatar'></Image>
          </div>

            
              <div className={styles.container}>
                <form action='/api/post'>
                    <label for="message"></label>
                      <div className={styles.form}>
                        <textarea className={styles.boxsizingBorder}
                          name="message"
                          onChange={event=>setFormValue(event.target.value)}
                          id="message"
                          rows="7"
                          required
                          minlength='10'
                          placeholder="What's happening?">
                        </textarea>
                      </div>
                      <div className={styles.buttonscontainer}>
                    <div>
                      <div className={styles.icon} onClick={()=>console.log('woah')}><AiOutlineBarChart size={24}></AiOutlineBarChart></div>
                      <div className={styles.icon}><AiOutlineBarChart size={24}></AiOutlineBarChart></div>
                      <div className={styles.icon}><AiOutlineBarChart size={24}></AiOutlineBarChart></div>
                      <div className={styles.icon}><AiOutlineBarChart size={24}></AiOutlineBarChart></div>
                      <div className={styles.icon}><AiOutlineBarChart size={24}></AiOutlineBarChart></div>
                    </div>
                    <div>
                      <button
                        className={styles.tweetbutton}
                        disabled={formValue === '' ? true:false}>
                        Tweet
                      </button>
                    </div>
                  </div>
                  </form>
              </div>
              </div>
  )
}