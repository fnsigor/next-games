import React from 'react'
import Button from './Button'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav className={`
    border-b border-solid  border-white p-6 mb-10
    flex justify-between
    `} >

            <div className='flex gap-4'>
                <Button>
                    <Link href={"/"}>Home</Link>
                </Button>
                <Button>
                    <Link href={"https://github.com/fnsigor?tab=repositories"} target='_blank'>Acessar repositório</Link>
                </Button>
            </div>

            <div className='flex gap-4'>
                <input
                className={`text-base bg-trasparent-gray border border-white rounded-lg px-4 w-[300px]
                focus:outline focus:outline-white focus:bg-gray focus:text-white
                transition duration-75
                `}
                type="text" placeholder='Call Of Duty Warzone' />
                <Button>
                    Buscar jogo
                </Button>
            </div>
        </nav>
    )
}
