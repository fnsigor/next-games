import { GameList } from '@/components/GameList'
import { IGame } from '@/interfaces/igame';
import React from 'react'


const url = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/";
const config = {
  headers: {
    "dev-email-address": "igorcontasec@gmail.com"
  }
};


const SearchPage = async ({ params }: any) => {


  const response = await fetch(url, config)
  const list = await response.json() as IGame[]

  return (
    <div className='relative'>
      <GameList list={list} query={params.gamename} />
    </div>
  )
}

export default SearchPage