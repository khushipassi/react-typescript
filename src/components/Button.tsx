import React from 'react'

type ButtonProps={
    // handleClick?:()=>void
    handleClickk?:(event:React.MouseEvent<HTMLButtonElement>)=>void
    handle:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

function Button({handle,handleClickk}:ButtonProps) {
  return (
    <div>
        {/* <button onClick={props.handleClick}>Click</button> */}
        <button onClick={handleClickk}>Click2</button>
        <button onClick={(event)=>handle(event,1)}>Click3</button>
    </div>
  )
}

export default Button