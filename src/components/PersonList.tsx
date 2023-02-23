import React from 'react'
import { PersonListProps } from './Person.types'

// type PersonListProps={
//     name:{
//         mail:string
//         id:number
//     }[]
// }


function PersonList({name}:PersonListProps) {
  return (
    <div>
        {name.map((item)=>{
            return(
                <h2 key={item.id}>{item.mail} {item.id}</h2>
            )
        })
        }
        
    </div>
  )
}

export default PersonList