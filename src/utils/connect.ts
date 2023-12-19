export default async function getData() {

  const res =  await fetch("https://pokeapi.co/api/v2/pokemon?limit=12&offset=0")

  if(!res.ok){
    throw new Error("Unexpected erro");
  }

  const data = await res.json()

  return data;
}