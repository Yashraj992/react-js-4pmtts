import React from 'react'
import data from './Data'

export default function User() {
  return (
    <>
      <div className="main">
        {data && data.map((item)=>{
            return(
                <>
                <div className="age">
                <p>Employee id is: {item.id}</p>
                <p>Employee name is: {item.name}</p>
                <p>Employee age is: {item.age}</p>
                </div>
                </>
            )
        })}
      </div>
    </>
  )
}
