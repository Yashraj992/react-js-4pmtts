import React ,{useState} from 'react'

export default function Employee() {
    // destructuring of state
    const[data,setData]=useState([
        {
            name:"yash",
            name2:"dhval",
            name3:"pruthvi",
            name4:"nax"
        }
    ])
  return (
    <>
    <div className="main">
      {/* <h1>hello {data.name}</h1> */}
      {data && data.map((data)=>{
        return(
            <>
            <h1>Employee 1: {data.name}</h1>
            <h1>Employee 2: {data.name2}</h1>
            <h1>Employee 3: {data.name3}</h1>
            <h1>Employee 4: {data.name4}</h1>
            </>
        )
      })}
      </div>
      <button onClick={()=>setData([
        {
            name:"krutik",
            name2:"dev",
            name3:"harsh",
            name4:"pratik"
        }
      ])}>click on change</button>
    </>
  )
}
