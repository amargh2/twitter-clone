import styles from '../styles/PostArea.module.scss'
import { useEffect, useState } from 'react'
import {AiFillHeart, 
  AiOutlineHeart, 
  AiOutlineRetweet,
  AiOutlineShareAlt} from 'react-icons/ai'
import PostCard from './PostCard'

function PostsArea(props){

  const [liked, setLiked] = useState(false)
  console.log(props.posts)

  return (
    <div className={styles.PostsArea}>
      {props.posts.map(post => (<PostCard key={'key'} post = {post}></PostCard>))}
    </div>
  )
}


export default PostsArea