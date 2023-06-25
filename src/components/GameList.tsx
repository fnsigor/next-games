'use client'

import React from 'react'
import { useState } from 'react'
import GameCard from './GameCard'
import { IGame } from "@/interfaces/igame";
import Button from './Button';

interface Props {
  list: IGame[]
}


export const GameList = ({ list }: Props) => {

  const [genreFilter, setGenreFilter] = useState<boolean | string>(false)

  const availableGenres = list.reduce((acc: string[], game) => {
    return acc.includes(game.genre) ? [...acc, game.genre] : acc
  }, [])


  return (
    <>

      <Button className="absolute top-0 right-0">
        <span>Filtrar por categoria</span>
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.8211 1.69104C25.6672 1.33543 25.4121 1.03291 25.0876 0.821107C24.7631 0.609305 24.3835 0.497566 23.9961 0.499788H1.99606C1.60897 0.500551 1.23043 0.613626 0.906342 0.825296C0.582256 1.03697 0.326559 1.33814 0.170269 1.69227C0.0139802 2.0464 -0.0361847 2.43828 0.0258603 2.82036C0.0879053 3.20244 0.259494 3.55831 0.51981 3.84479L0.52981 3.85604L8.99606 12.896V22.4998C8.99598 22.8618 9.09413 23.217 9.28005 23.5275C9.46598 23.8381 9.73271 24.0924 10.0518 24.2633C10.3709 24.4342 10.7304 24.5153 11.0919 24.498C11.4535 24.4806 11.8036 24.3655 12.1048 24.1648L16.1048 21.4973C16.379 21.3146 16.6039 21.0671 16.7593 20.7766C16.9148 20.4861 16.9961 20.1618 16.9961 19.8323V12.896L25.4636 3.85604L25.4736 3.84479C25.7366 3.55961 25.9099 3.20327 25.9717 2.82025C26.0335 2.43722 25.9811 2.04448 25.8211 1.69104ZM15.5386 11.5348C15.1912 11.903 14.9972 12.3898 14.9961 12.896V19.8323L10.9961 22.4998V12.896C10.9972 12.388 10.804 11.8987 10.4561 11.5285L1.99606 2.49979H23.9961L15.5386 11.5348Z" fill="white" />
        </svg>
      </Button>

      <ul
        className={`
      grid grid-cols-3 justify-items-center gap-16 w-fit mx-auto
      `}>

        {genreFilter

          ? (list.filter(game => game.genre === genreFilter)
            .map(game => (
              <GameCard game={game} />
            )))

          : (list.map(game => (
            <GameCard game={game} />
          )))

        }

      </ul>
    </>
  )
}
