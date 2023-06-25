import { IGame } from '@/interfaces/igame'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface Props {
  game: IGame
}

const GameCard = ({game}: Props) => {
  return (
    <li>
        <Image src={game.thumbnail} alt={game.title} width={365} height={206} className='rounded-[8px]  object-contain'/>
        <h4 className={`
        text-white b font-bold
        `}>{game.title}</h4>
        <Link href="/genres/" className='text-yellow-300'>{game.genre}</Link>
    </li>
  )
}

export default GameCard