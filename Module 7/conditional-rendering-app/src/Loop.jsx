import React from 'react'
const Data=[
    {
        id:1,
        name:"yash"
    },
    {
        id:2,
        name:"drashti"
    },
    {
        id:3,
        name:"dugu"
    },
    {
        id:4,
        name:"gattu"
    },
    {
        id:5,
        name:"yashti"
    }
]

export default function Loop() {
  return (
    <>
      {Data.filter((item,key)=>key<3).map((filteredItem)=>{
        return(
            <>
            <p>{filteredItem.id}</p>
            <p>{filteredItem.name}</p>
            </>
        )
      })}
    </>
  )
}
