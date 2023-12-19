"server side"
import Image from 'next/image'
import styles from './page.module.scss'
import Card from '@/components/card/card';
import getData from '../utils/connect'





export default async  function Home() {
  const pokemons = await getData();
  console.log(pokemons)
 
  return (
      <>
     <main>
     <div className={styles.content}>
    

    
     </div>
    </main>
     </>
    
  )
}
