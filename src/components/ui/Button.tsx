import React from 'react'

type Props = {
    text?: string;
    icon?: React.ReactNode;
    position?: string;
    handleClick?: () => void;
    classes?: string
}

const Button = ({text, icon, position, handleClick, classes}: Props) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden w-full
    rounded-lg p-[1px] md:w-60 md:mt-10" onClick={handleClick}>
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
    bg-[conic-gradient(from_90deg_at_50%_50%,#0055ff_0%,#83cdff_50%,#edf7ff_100%)]" />
    <span className={`inline-flex h-full w-full cursor-pointer items-center 
    justify-center rounded-lg bg-greyish-100/5 px-3 py-1 text-sm 
    font-medium text-ribbon-950 backdrop-blur-3xl gap-3 ${classes}`}>
    {position === 'left' && icon}
    {text}
    {position === 'right' && icon}
    </span>
    </button>
  )
}

export default Button
