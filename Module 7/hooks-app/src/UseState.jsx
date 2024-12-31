import React,{useState} from 'react'

export default function UseState() {
    // const [data,setData] = useState("red");

    // const[count,setCount]=useState(0);

    const [car,setCar]=useState({
        color:"black",
        modal:"fortuner",
        year:2021
    })
  return (
    <>
      {/* <h1>color is {data}</h1>
      <button type='button' onClick={()=>setData("white")}>change</button> */}

      {/* <h2>Conter is: {count}</h2>
      <button type='button' onClick={()=>setCount(count+1)}>+</button> &nbsp;
      <button type='button' onClick={()=>setCount(count-1)}>-</button> */}

      <h1>Car color is <span style={{color:"red"}}>{car.color}</span> and name of car is <span style={{color:"red"}}>{car.modal}</span> and buying in <span style={{color:"red"}}>{car.year}</span></h1>
      <button type='button' onClick={()=>setCar({
        color:"white",
        modal:"mercedes",
        year:"2023"
      })}> change</button>
    </>
  )
}
