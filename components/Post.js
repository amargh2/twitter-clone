import styles from '../styles/Post.module.scss'
import {AiOutlineBarChart, AiOutlinePicture,AiOutlineGif,AiOutlineSmile,AiOutlineCalendar, AiOutlineEnvironment} from 'react-icons/ai'
import {HiMapPin} from 'react-icons/hi'
import {useState} from 'react'
import Image from 'next/image'
export default function Post() {
  const [formValue, setFormValue] = useState('');
  
  return (
    <div className={styles.postContainer}>
            <Image src='/mesmall.jpg' className={styles.avatar} layout='fixed' height={55} width={55} alt='avatar'></Image>

            
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
                      <div className={styles.icon} onClick={()=>console.log('woah')}><AiOutlinePicture size={18}/></div>
                      <div className={styles.icon}><AiOutlineGif size={18}/></div>
                      <div className={styles.icon}><AiOutlineSmile size={18}/></div>
                      <div className={styles.icon}><AiOutlineBarChart size={18}/></div>
                      <div className={styles.icon}><AiOutlineCalendar size={18}/></div>
                      <div className={styles.icon}><AiOutlineEnvironment size={18}/></div>
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