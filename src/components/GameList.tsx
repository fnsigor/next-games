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


const ListTitle = ({ children }: any) => {
  return (
    <h1 className={`
    font-bold text-white text-4xl text-center mb-20
    lg:text-xl lg:mb-12
    `}>{children}</h1>
  )
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

  useEffect(() => {
    if (search) {
      setGenreFilter(search)
    }
  }, [search])




  return (
    <>

      {query !== undefined
        ? (<ListTitle>Exibindo resultados para<span className='italic'> {query}</span></ListTitle>)
        : (genreFilter === 'all'
          ? (<ListTitle >Todos os jogos</ListTitle>)
          : (<ListTitle>Categoria: {genreFilter}</ListTitle>)
        )
      }


      {query === undefined &&
        <select
          value={genreFilter}
          className={`absolute top-0 right-0
      text-white border boder-white border-solid py-2 px-4 rounded-lg flex gap-2 justify-center text-base bg-black
    hover:bg-white hover:text-black
    transition duration-300
     lg:fixed lg:top-[initial] lg:bottom-[80px] lg:right-6 lg:text-sm
      `}
          onChange={e => setGenreFilter(e.currentTarget.value)}>
          <option value="all">Todos os jogos</option>
          {availableGenres.map(genre => (
            <option value={genre} key={genre}> {genre}</option>
          ))}
        </select>
      }

      {/* {query === undefined &&
        <select
          value={genreFilter}
          className={`none bottom-[80px] right-6
      text-white border boder-white border-solid py-2 px-4 rounded-lg flex gap-2 justify-center text-sm bg-black
  hover:bg-white hover:text-black
  transition duration-300
  lg:block
      `}
          onChange={e => setGenreFilter(e.currentTarget.value)}>
          <option value="all">Todos os jogos</option>
          {availableGenres.map(genre => (
            <option value={genre} key={genre}> {genre}</option>
          ))}
        </select>

      } */}

      <ul
        className={`
        grid  grid-cols-3 justify-items-center gap-16 w-fit mx-auto pb-[80px]
        lg:grid-cols-2 lg:gap-6

      `}>


        {
          query === undefined
            ? (genreFilter !== 'all'

              ? (list.filter(game => game.genre === genreFilter)
                .map(game => (
                  <GameCard game={game} key={game.id} />
                )))

              : (list.map(game => (
                <GameCard game={game} key={game.id} />
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
