'use client'

import React, { useState } from 'react'
import Button from './Button'
import Link from 'next/link'

export const Navbar = () => {


    const [gamename, setGamename] = useState('')


    return (
        <nav className={`
    border-b border-solid  border-white p-6 mb-10
    flex justify-between lg:justify-center
    `} >

            <div className='flex gap-4 lg:hidden'>
                <Button className=''>
                    <Link href={"/"}>Home</Link>
                </Button>
                <Button>
                    <Link href={"/data"}>Jogos</Link>
                </Button>
                <Button>
                    <Link href={"https://github.com/fnsigor?tab=repositories"} target='_blank'>Acessar repositório</Link>
                </Button>
            </div>

            <div className='flex gap-4 lg:w-[100%] lg:justify-center'>
                <input
                    onChange={e => setGamename(e.target.value)}
                    value={gamename}
                    className={`text-base bg-trasparent-gray border border-white rounded-lg px-4 w-[300px] text-white
                focus:outline focus:outline-white focus:bg-gray
                transition duration-75
                lg:min-w-[50%] lg:text-sm
                `}
                    type="text" placeholder='Call Of Duty Warzone' />
                <Button className='lg:text-sm'>
                    <Link href={`/data/${gamename}`}>Buscar</Link>
                </Button>
            </div>
        </nav>
    )
}
