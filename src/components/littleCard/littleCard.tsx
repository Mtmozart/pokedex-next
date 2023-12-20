import Image from "next/image"
import styles from './styles.module.scss'
import Bulbassaur from '../../../public/images/bulbasaur.jpg'

export type pokemonsProps = {
  id: number;
  name: string;
  link: string;
  
};


export default function LittleCard({id, name, link }: pokemonsProps){
return(
  <>
  <section className={styles.content_card}>
    
      <div className={styles.imagecontent}>
      <Image src={Bulbassaur}
        alt='Descrição da imagem'
        className={styles.image}
      />
      </div>
      <div key={id} className={styles.content_informations}>
        <p>Nome: {name}</p>
        <button><a href={link}>Clique aqui para saber mais</a></button>
        
      </div>
   
    
   
  </section>
   </>
)
}