import React from 'react'

export default function Nestedif() {
    const a=40;
    const b=60;

    if(a>b){
        if(a!=0 && b!=0){
            return <h2>A is greater than B</h2>
        }
    }
    else{
        return <h2>A is less than B</h2>
    }
  return (
    <>
      
    </>
  )
}
