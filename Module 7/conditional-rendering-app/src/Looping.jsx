import React from 'react'

const Data = [
    {
        id: 1,
        name: "yashrajsinh",
        age: "24"
    },
    {
        id: 2,
        name: "drashti",
        age: "22"
    },
    {
        id: 3,
        name: "aaru",
        age: "21"
    },
    {
        id: 4,
        name: "hetu",
        age: "21"
    },
    {
        id: 5,
        name: "honey",
        age: "20"
    },
    {
        id: 6,
        name: "bhoomi",
        age: "20"
    }
]

export default function Looping() {
    return (
        <>
        {Data && Data.map((item)=>{
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
