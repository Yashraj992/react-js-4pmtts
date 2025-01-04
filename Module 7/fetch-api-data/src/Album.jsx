import React, { useEffect, useState } from 'react'

export default function Album() {
    const [album,setAlbum ]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/albums`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setAlbum(data);
        })
    })
  return (
    <>
        {album && album.map((data)=>{
            return(
                <>
                <div className='shadow p-2'>
                    <p>{data.userId}</p>
                    <p>{data.id}</p>
                    <p>{data.title}</p>
                </div>
                </>
            )
        })}
    </>
  )
}
