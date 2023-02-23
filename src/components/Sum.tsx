import React from 'react'

type SumProps={
  a:number,
  b:number,
}

function Sum(props:SumProps){
  return (
    <>
      {props.a+props.b}
    </>
  )
}

export default Sum