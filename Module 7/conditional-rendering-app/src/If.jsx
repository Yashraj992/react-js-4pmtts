import React from 'react'

export default function If() {
    const age = 10;
    if(age>=18){
        return <h2>Eligible for voting</h2>
    }
    else{
        return <h2>Not Eligible for voting.</h2>
    }
  return (
    <>
    </>
  )
}
