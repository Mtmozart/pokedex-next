import Image from 'next/image'
import styles from './page.module.scss'
import Card from '@/components/card/card';
import LittleCard from "@/components/littleCard/littleCard"
//import getData from '../utils/connect'
async function getData() {

  const res =  await fetch("https://pokeapi.co/api/v2/pokemon?limit=12&offset=0")

  if(!res.ok){
    throw new Error("Unexpected erro");
  }

  const data = await res.json()

  return data;
}

export default async  function Home() {
  const pokemons = await getData();
  console.log(pokemons)
 
  return (
      <>
     <main>
     <div className={styles.content}>
    
    {pokemons.results.map((pokemon: any) => (
      <LittleCard 
      key={pokemon.id} 
      id={pokemon.id}
      name={pokemon.name} 
      link={pokemon.url}
      />
    ))}
    
     </div>
    </main>
     </>
    
  )
}
