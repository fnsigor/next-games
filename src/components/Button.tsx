import React, { ReactNode } from 'react'
import { JsxElement } from 'typescript'

interface Props {
    children: string | JSX.Element | JSX.Element[] 
    className?: string
    resetFunction?: () => void
  }

const Button = ({className, children, resetFunction}: Props) => {
  return (
    <button 
    onClick={resetFunction}
    className={`
    text-white border boder-white border-solid py-2 px-4 rounded-lg flex gap-2 justify-center text-base 
    hover:bg-white hover:text-black
    transition duration-300
    ${className}
    `}>
        {children}
    </button>
  )
}

export default Button