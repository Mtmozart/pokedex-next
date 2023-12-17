"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from '../../../public/images/pokémon_logo.svg'
import { FaAlignJustify } from "react-icons/fa";<FaAlignJustify />

export default function Header(){
  const [navActive, setNavActive ] = useState('menu')
  const  navToggler =  () => {
    navActive === 'menu' ? setNavActive('menu nav_menu_responsive') : setNavActive('menu') ;
  }
  return(
    <nav className={styles.nav_container}>
      <a href="#" className={styles.brand}>Pokemon</a>
    
      <ul className={navActive}>
        <li className={styles.nav_item}><a href="" className="navlink">Home</a></li>
        <li className={styles.nav_item}><a href="" className="navlink">About</a></li>
        <li className={styles.nav_item}><a href="" className="navlink">Skills</a></li>
        <li className={styles.nav_item}><a href="" className="navlink">Portfólio</a></li>
        <li className={styles.nav_item}><a href="" className="navlink">Contato</a></li>
      </ul>
      
      <FaAlignJustify className={styles.toogle} onClick = {navToggler}/>
    </nav>
 
  
  )
}