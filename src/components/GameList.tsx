'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import GameCard from './GameCard'
import { IGame } from "@/interfaces/igame";
import Button from './Button';

import { useSearchParams } from 'next/navigation'

interface Props {
  list: IGame[]
  query?: string
}


export const GameList = ({ list, query }: Props) => {

  const [genreFilter, setGenreFilter] = useState('all')

  const availableGenres = list.reduce((acc: string[], game) => {
    if (!acc.includes(game.genre)) {
      acc.push(game.genre);
    }
    return acc;
  }, [])

  
  const searchParams = useSearchParams()
  const search = searchParams.get('filter')

  useEffect(()=>{
   if(search){
    setGenreFilter(search)
   }
  }, [search])




  return (
    <>

      {query !== undefined
        ? (<h1 className="font-bold text-white text-4xl text-center mb-20">Exibindo resultados para
         <span className='italic'> {query}</span></h1>)
        : (genreFilter === 'all'
          ? (<h1 className="font-bold text-white text-4xl text-center mb-20">Todos os jogos</h1>)
          : (<h1 className="font-bold text-white text-4xl text-center mb-20">Categoria: {genreFilter}</h1>)
        )
      }


      {query === undefined &&
        <select
          value={genreFilter}
          className={`absolute top-0 right-0
      text-white border boder-white border-solid py-2 px-4 rounded-lg flex gap-2 justify-center text-base bg-black
    hover:bg-white hover:text-black
    transition duration-300
      `}
          onChange={e => setGenreFilter(e.currentTarget.value)}>
          <option value="all">Todos os jogos</option>
          {availableGenres.map(genre => (
            <option value={genre} key={genre}> {genre}</option>
          ))}
        </select>
      }

      <ul
        className={`
      grid grid-cols-3 justify-items-center gap-16 w-fit mx-auto
      `}>


        {
          query === undefined
            ? (genreFilter !== 'all'

              ? (list.filter(game => game.genre === genreFilter)
                .map(game => (
                  <GameCard game={game} key={game.id}/>
                )))

              : (list.map(game => (
                <GameCard game={game}key={game.id} />
              ))))

            : (list.filter(game => game.title.toLowerCase().includes(query.toLowerCase()))
              .map(game => (
                <GameCard game={game} key={game.id} />
              )))
        }


      </ul>
    </>
  )
}
