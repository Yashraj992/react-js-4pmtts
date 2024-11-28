import React, { useState } from "react";

function App() {
  const [data, setData] = useState("yashrajsinh");
  return (
    <>
      <h1>My name is : {data}</h1>
      <button onClick={()=>setData("yash")}>Click on change</button>
    </>
  )
}

export default App