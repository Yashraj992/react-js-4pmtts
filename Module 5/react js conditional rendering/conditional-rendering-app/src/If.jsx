import React from 'react'

export default function If() {
    const age = 14;
    if(age>=18){
        var res='you are eligible'
    }
    else{
        var res='you are not eligible'
    }
  return (
    <div>
      <h1>{res}</h1>
    </div>
  )
}
