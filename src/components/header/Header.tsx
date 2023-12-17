"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from '../../../public/images/pokémon_logo.svg'
import { FaAlignJustify } from "react-icons/fa";<FaAlignJustify />

export default function Header(){
  const [menu, setMenu ] = useState(false)
  
  const navToggler = () => {
    setMenu((prevMenu) => {
        return !prevMenu;
    });
  };
  return(
    <nav className={styles.nav_container}>
      <a href="#" className={styles.brand}><Image alt="Pokemon logo" src={Logo}/></a>
      <div className={`${styles.menu} ${menu ? styles.nav_menu_responsive : ""}`}>
      <ul>
        <li className={styles.nav_item}><a href="" className="navlink">Home</a></li>
        <li className={styles.nav_item}><a href="" className="navlink">About</a></li>
        <li className={styles.nav_item}><a href="" className="navlink">Skills</a></li>
        <li className={styles.nav_item}><a href="" className="navlink">Portfólio</a></li>
        <li className={styles.nav_item}><a href="" className="navlink">Contato</a></li>
      </ul>
      </div>
      
      <div>
      <FaAlignJustify className={styles.toogle} onClick = {navToggler}/>
      </div>
    </nav>
 
  
  )
}