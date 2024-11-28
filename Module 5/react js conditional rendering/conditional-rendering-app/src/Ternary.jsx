import React from 'react'

export default function Ternary() {
    const age=41;
    const res = age>=18 ?"eligible":"not eligible";
  return (
    <>
      <h1>{res}</h1>
    </>
  )
}
