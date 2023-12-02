import React from 'react'

const PageIndicator = (props) => {
  return (
    <li className={`ring ring-white ring-1 rounded-full shrink-0 h-7 w-7 flex justify-center items-center ${props.index === props.currentPage ? "bg-slate-300 text-black" : null}` }>
        {props.index}
    </li>
  )
}

export default PageIndicator