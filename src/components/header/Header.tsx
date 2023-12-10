import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from '../../../public/images/logo.jpg'
//import { FaAlignJustify } from "react-icons/fa";<FaAlignJustify />

export default function Header(){
  return(
    <header className={styles.headerContainer}>
      <section className={styles.headerContent}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <Image src={Logo} alt="Essa casa até que é legal"/>
          </Link>
        </div>
      
      <nav className={styles.menu}>
        
         <ul>
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
      </ul>
        </nav>
      </section>

    </header>
 
  
  )
}