
import Button from "@/components/Button";
import { IGame } from "@/interfaces/igame";
import {GameList}  from '@/components/GameList'


const url = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/";
const config = {
  headers: {
    "dev-email-address": "igorcontasec@gmail.com"
  }
};

export default async function Home() {

  const response = await fetch(url, config)
  const list = await response.json() as IGame[]

  
  return (
    <main className="relative">

      <h1 className="font-bold text-white text-4xl text-center mb-20">Exibindo todos os jogos</h1>



      <GameList list={list}/>

    </main>
  )
}
