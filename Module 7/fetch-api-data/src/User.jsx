import React,{useState,useEffect} from 'react'

export default function User() {
    const [user,setUser] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setUser(data);
        })
    },[])
  return (
    <>
      <div className="app">
        {user && user.map((item)=>{
            return(
                <>
                <div className="user">
                    <p key={item.userId}>{item.userId}</p>
                    <p key={item.id}>{item.id}</p>
                    <p key={item.title}>{item.title}</p>
                    <p key={item.body}>{item.body}</p>
                </div>
                </>
            )
        })}
      </div>
    </>
  )
}
