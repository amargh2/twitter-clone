import styles from '../styles/PostArea.module.scss'
import { useEffect, useState } from 'react'
import {AiFillHeart, 
  AiOutlineHeart, 
  AiOutlineRetweet,
  AiOutlineShareAlt} from 'react-icons/ai'


function PostsArea(props){

  const [liked, setLiked] = useState(false)
  console.log(props.posts)
  const posts = props.posts.map(post => {
    return (
      <div className={styles.post}>
        <div className={styles.authorAndDate}>
            <div>
              <p>{post.user.name}</p>
            </div>
            <div>
              <p>{post.user.username}</p>
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
  })
  return (
    <div className={styles.PostsArea}>
      {posts}  
    </div>
  )
}


export default PostsArea