import React from 'react'

export default function Ternary() {
    const age = 2;
    const check=age>=18 ? <h2>Eligible</h2> : <h2>Not Eligible</h2>;
  return (
    <>
      <p>{check}</p>
    </>
  )
}
