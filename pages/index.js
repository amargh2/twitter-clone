import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import SideBar from '../components/SideBar'
import MakePost from '../components/MakePost'
import HomeBar from '../components/HomeBar'
import PostsArea from '../components/PostsArea'
import Post from '../models/Post'

export default function Home({posts, err}) {
  return (
    <div className='column'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.grid}>
        <div className={styles.sidebarcolumn}>
          <SideBar></SideBar>
        </div>
        <div className={styles.postcolumn}>
        <div><HomeBar /></div>
          <MakePost></MakePost>
          <PostsArea props={{posts}}/>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps (context) {
  try {
    const posts = await Post.find({})
    return { props :{
      posts:(await JSON.parse(JSON.stringify(posts)))
    }}
  } catch (err) {
    console.error(err)
  }
}