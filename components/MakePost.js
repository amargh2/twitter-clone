import styles from '../styles/Post.module.scss'
import {AiOutlineBarChart, AiOutlinePicture,AiOutlineGif,AiOutlineSmile,AiOutlineCalendar, AiOutlineEnvironment} from 'react-icons/ai'
import {useState} from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
export default function MakePost(props) {
  const [formValue, setFormValue] = useState('');
  const {data:session} = useSession()
  return (
    <div className={styles.postContainer}>
          <div className={styles.avatar}>
            <Image src ={session ? session.user.image : ''} layout='fixed' height={70} width={70} alt='avatar'></Image>
          </div>
              <div className={styles.container}>
                <form action='/api/post'>
                    <label htmlFor="message"></label>
                      <div className={styles.form}>
                        <textarea className={styles.boxsizingBorder}
                          name="message"
                          onChange={event=>setFormValue(event.target.value)}
                          id="message"
                          rows="7"
                          required
                          minLength='10'
                          placeholder="What's happening?">
                        </textarea>
                      </div>
                      <div className={styles.buttonscontainer}>
                    <div>
                      <div className={styles.icon} onClick={()=>console.log('woah')}><AiOutlinePicture size={24}/></div>
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