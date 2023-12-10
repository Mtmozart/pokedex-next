import Image from 'next/image'
import styles from './page.module.css'



async function getData() {

  const res =  await fetch("https://pokeapi.co/api/v2/pokemon/1")

  if(!res.ok){
    throw new Error("Unexpected erro");
  }

  const data = res.json()

  return data
}

export default async  function Home() {
  const pokemon = await getData();
  console.log(pokemon);
  return (
      <>
     <main>
     Olá mundo
    </main>
     </>
    
  )
}
