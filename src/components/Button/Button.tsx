import { ReactElement } from 'react'

interface ButtonProps {
  children: ReactElement
  style: 'primary' | 'secondary'
}

export default function Button({ children, style }: ButtonProps) {
  const buttonStyles =
    style === 'primary'
      ? 'border border-clever-green bg-clever-green text-white group-hover:bg-clever-green-tint-80 transition-colors'
      : 'border border-clever-green text-black'

  return <span className={`block py-2 px-8 ${buttonStyles}`}>{children}</span>
}
