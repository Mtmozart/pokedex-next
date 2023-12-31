import Image from "next/image"
import styles from './page.module.scss'
import Bulbassaur from '../../../public/images/bulbasaur.jpg'

export type pokemonsProps = {
  id: number;
  name: string;
  srcImg: string;
  number: number;
  type: string[]; 
  weight: number;
};


export default function Card({ name, srcImg, number, type, weight}: pokemonsProps){
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
        <p>Nome: {name}</p>
        <p>Número da pokédexs: {number} </p>
        <p>Peso: {weight}</p>
        <p>Tipos: {type}</p>
        <ul>
          <li>grama</li>
          <li>Outro tipo</li>
        </ul>
        
      </div>
   
    
   
  </section>
   </>
)
}