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
export default function SideBar() {

  return (
      <div className={styles.sidebar}>
          <div className={styles.logo}>
            <AiOutlineTwitter size={50}/>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><AiOutlineHome/> Home</div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><FaHashtag/> Explore</div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><div><FaRegBell/> </div>Notifications</div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><AiOutlineMail/> Messages</div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><FaRegBookmark/> Bookmarks</div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><FaList/> Lists</div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button><div><CgProfile/> Profile</div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button className={styles.button}><div><CgMoreO/>More</div></button></a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a><button id='tweetbutton'><div><GiQuill/>Tweet</div></button></a>
            </Link>
          </div>
      </div>
  )
}