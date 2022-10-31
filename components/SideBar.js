import { useState } from "react"
import {
  AiOutlineTwitter, 
  AiOutlineBell, 
  AiOutlineMail, 
  AiOutlineHome, 
} from 'react-icons/ai'
import {CgProfile, CgMoreO} from 'react-icons/cg'
import {GiQuill} from 'react-icons/gi'
import Link from 'next/link'
import {FaHashtag, FaRegBookmark, FaRegBell, FaList} from 'react-icons/fa'
import styles from '../styles/SideBar.module.scss' 
import Image from "next/image"
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { userAgent } from "next/server"
export default function SideBar() {
  const [clicked, setClicked] = useState(false)
  const {data:session} = useSession()
  return (
      <div className={styles.sidebar}>
          <div className={styles.logo}>
              <AiOutlineTwitter size={40}/>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><AiOutlineHome/> <div className={styles.words}>Home</div></div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><FaHashtag/> <div className={styles.words}>Explore</div></div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><div><FaRegBell/> </div><div className={styles.words}>Notifications</div></div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><AiOutlineMail/> <div className={styles.words}>Messages</div></div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><FaRegBookmark/> <div className={styles.words}>Bookmarks</div></div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><FaList/> <div className={styles.words}>Lists</div></div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><CgProfile/><div className={styles.words}> Profile</div></div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button className={styles.button}><div><CgMoreO/><div className={styles.words}>More</div></div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button id={styles.tweetbutton}><div><GiQuill/><div className={styles.words}>Tweet</div></div></button></a>
            </Link>
          </div>
          <div className={styles.sidebaravatar} onClick = {() => setClicked(clicked === true ? false : true)}>
            <Link href='/'>
              <div className={styles.imageContainer}>
                <Image src={session ? session.user.image : ''} alt='user picture' width={50} height={50}></Image>
                {clicked === true ? (<div><button onClick={() => session ? signOut() : signIn('google')}> 
                {session ? 'Log Out' : 'Log In'}</button></div>) : <></>}
              </div>
            </Link>
          </div>
      </div>
  )
}