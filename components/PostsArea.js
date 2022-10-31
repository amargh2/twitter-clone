import styles from '../styles/PostArea.module.scss'
import { useEffect, useState } from 'react'
import {AiFillHeart, 
  AiOutlineHeart, 
  AiOutlineRetweet,
  AiOutlineShareAlt} from 'react-icons/ai'
import PostCard from './PostCard'

function PostsArea({posts}){
  const [liked, setLiked] = useState(false)
  return (
    <div className={styles.PostsArea}>
      {posts ? posts.map(post => {
        return (
        <PostCard key={post.id} post = {post}></PostCard>)
        }) : (<div>no data</div>)}
    </div>
  )
}


export default PostsArea