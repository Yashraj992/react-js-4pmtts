import React,{useState,useEffect} from 'react'

export default function FetchData() {
    const [cod,setCod]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setCod(data);
        })
    },[])
  return (
    <>
      <div className="app">
        {cod && cod.map((item)=>{
            return(
                <>
                <div className="data">
                    <p>{item.userId}</p>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                    <p>{item.completed}</p>
                </div>
                </>
            )
        })}
      </div>
    </>
  )
}
