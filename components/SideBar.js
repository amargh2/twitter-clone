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
export default function SideBar() {

  return (
      <div className={styles.sidebar}>
          <div className={styles.logo}>
            <AiOutlineTwitter size={50}/>
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
              <a><button id={styles.tweetbutton100}><div><GiQuill/><div className={styles.words}>Tweet</div></div></button></a>
            </Link>
          </div>
          <div className={styles.sidebaravatar}>
            <Link href='/'>
              <div>
                <Image src='/mesmall.jpg' width={100} height={100}></Image>
              </div>
            </Link>
          </div>
      </div>
  )
}