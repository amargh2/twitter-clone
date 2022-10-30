import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineRetweet,
  AiOutlineShareAlt
} from 'react-icons/ai'
import styles from '../styles/PostArea.module.scss'
import { useState } from 'react'

export default function PostCard({post}) { 
  const [liked, setLiked] = useState(false)
  const [id, setId] = useState(post._id)
  console.log(post)
  if (post) return (
    <div className={styles.post}>
      <div className={styles.authorAndDate}>
        <div>
          <p>{post._id}</p>
        </div>
        <div className={styles.username}>
          <p>@</p>
        </div>
        <div className={styles.date}>
          <p>{post.date}</p>
        </div>
      </div>
      <div className='post-content'>
        <p>{post.content}</p>
      </div>
      <div className={styles.buttonsContainer}>
        { 
          liked === false ? (<AiOutlineHeart size={15} onClick={() => liked === true ? setLiked(false):setLiked(true)} className={styles.like}/>)
          : (<AiFillHeart size={15} className={styles.liked} onClick={() => liked === true ? setLiked(false):setLiked(true)}/>)
        }
        <AiOutlineRetweet className={styles.retweet} size={15}/>
        <AiOutlineShareAlt className={styles.share} size={15}/>
      </div>
    </div>
  )
}