import React from 'react'

const Data=[
    {
        id:1,
        name:"yashrajsinh",
        age:"24"
    },
    {
        id:1,
        name:"drashti",
        age:"22"
    },
    {
        id:1,
        name:"aaru",
        age:"21"
    },
    {
        id:1,
        name:"hetu",
        age:"21"
    },
    {
        id:1,
        name:"honey",
        age:"20"
    },
    {
        id:1,
        name:"bhoomi",
        age:"20"
    }
]

export default function Fillter() {
  return (
    <>
      {Data.filter((key,items)=>items<6).map((item)=>{
        return(
          <>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.age}</p>
          </>
        )
      })}
    </>
  )
}
