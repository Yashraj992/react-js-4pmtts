import React from 'react'

export default function IfElseIf() {
    const a=55;
    const b=55;
    const c=55;

    if(a>b && a>c){
        return <h2>A is mac number</h2>
    }
    else if(b>a && b>c){
        return <h2>B is max number</h2>
    }
    else if(c>a && c>b){
        return <h2>C is max number</h2>
    }
    else{
        return <h2>Something is wrong</h2>
    }
  return (
    <>
      
    </>
  )
}
