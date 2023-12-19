import Image from "next/image"
import styles from './page.module.scss'
import Bulbassaur from '../../../public/images/bulbasaur.jpg'

export default function Card(){
return(
  <>
  <section className={styles.content_card}>
    
      <div className={styles.imagecontent}>
      <Image src={Bulbassaur}
        alt='Descrição da imagem'
        className={styles.image}
      />
      </div>
      <div className={styles.content_informations}>
        <p>Nome: Bulbassaur</p>
        <p>Número da pokédexs: 1 </p>
        <p>Peso: 63</p>
        <p>Tipos:</p>
        <ul>
          <li>grama</li>
          <li>Outro tipo</li>
        </ul>
        
      </div>
   
    
   
  </section>
   </>
)
}