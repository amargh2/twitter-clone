import styles from '../styles/PostArea.module.scss'
import { useState } from 'react'
import {AiFillHeart, 
  AiOutlineHeart, 
  AiOutlineRetweet,
  AiOutlineShareAlt} from 'react-icons/ai'
export default function PostsArea() {
  
  const [liked, setLiked] = useState(false)
  
  const posts = {
    post: {
      content:'Whatever',
      author: 'Anthony',
      username: '@antho',
      date: new Date().toLocaleString()
    }
  }
  
  return (
    <div className={styles.PostsArea}>
        <div className={styles.authorAndDate}>
          <div>
            <p>{posts.post.author}</p>
          </div>
          <div>
            <p>{posts.post.username}</p>
          </div>
          <div>
            <p>{posts.post.date}</p>
          </div>
        </div>
         
          <div className='post-content'>
            <p>{posts.post.content}</p>
          </div>
          <div className={styles.buttonsContainer}>
            {liked === false ? 
              (<AiOutlineHeart size={15} onClick={() => liked === true ? setLiked(false):setLiked(true)} className={styles.like}/>) 
              : (<AiFillHeart size={15} className={styles.liked} onClick={() => liked === true ? setLiked(false):setLiked(true)}/>)
            }
            <AiOutlineRetweet className={styles.retweet} size={15}/>
            <AiOutlineShareAlt className={styles.share} size={15}/>
        </div> 
      </div>
  )
}