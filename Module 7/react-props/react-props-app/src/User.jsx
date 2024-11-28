import React from 'react'
import data from './Data'

export default function User() {
  return (
    <div>
      <div className="app">
        {data && data.map((props)=>{
                return(
                    <>
                    <p>user id is {props.id}</p>
                    <p>user name is {props.name}</p>
                    <p>user age is {props.age}</p>
                    <p>user salary is {props.salary}</p>
                    </>
                )
        })}
      </div>
    </div>
  )
}
