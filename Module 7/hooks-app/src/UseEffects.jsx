import React,{useState,useEffect} from 'react'

export default function UseEffects() {
    const [count,setCount] =useState(0);

    useEffect(()=>{
        setTimeout(setCount(count+1),2000)
    },count)
  return (
    <>
      <h1>count is {count}</h1>
      <button type='button' onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}
