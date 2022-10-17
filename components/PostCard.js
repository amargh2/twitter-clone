import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineRetweet,
  AiOutlineShareAlt
} from 'react-icons/ai'
import styles from '../styles/PostArea.module.scss'
import { useState } from 'react'

export default function PostCard(props) { 
  const [liked, setLiked] = useState(false)
  const [id, setId] = useState(props.post._id)
  const post = props.post
  const date = new Date(props.post.date)
  const rightNow = new Date()
  return (
    <div className={styles.post}>
      <div className={styles.authorAndDate}>
        <div>
          <p>{post.user.name}</p>
        </div>
        <div className={styles.username}>
          <p>@{post.user.username}</p>
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