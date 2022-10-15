import styles from '../styles/PostArea.module.scss'
import { useState } from 'react'
import {AiFillHeart, 
  AiOutlineHeart, 
  AiOutlineRetweet,
  AiOutlineShareAlt} from 'react-icons/ai'
import Post from '../models/Post'
import connectMongo from '../utils/connectMongo'
import { Context } from 'react'
import mongoose from 'mongoose'
function PostsArea({posts}) {
  
  const [liked, setLiked] = useState(false)
  
  
  return (
    <div>
      {posts.map(post => {
        return (
          <div className={styles.PostsArea}>
          <div className={styles.authorAndDate}>
            <div>
              <p>{post.user}</p>
            </div>
            <div>
              <p></p>
            </div>
            <div>
              <p>{post.date}</p>
            </div>
          </div>
      
            <div className='post-content'>
              <p>{post.content}</p>
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
      })}
      
    </div>
  )
}


export default PostsArea