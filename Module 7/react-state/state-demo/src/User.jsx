import { useState } from "react"

export default function User() {
    const [data, setData] = useState([
        {
            name: "yashraj",
            age: 23,
            contact: 9723411456
        },
        {
            name: "pruthvi",
            age: 21,
            contact: 9723411456
        },
        {
            name: "dhaval",
            age: 20,
            contact: 9723411456
        }
    ]
    )
    return (
        <>
            <div className="main">
                {data && data.map((item) => {
                    return (
                        <>
                        <div className="user">
                            <h2>name is :{item.name}</h2>
                            <h2>age is :{item.age}</h2>
                            <h2>contact is :{item.contact}</h2>
                        </div>    
                        </>
                    )
                })}
            </div>
        </>
    )
}
