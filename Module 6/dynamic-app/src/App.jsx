import React from 'react'
import Data from './Data'

export default function App() {
    return (
        <>
            {Data && Data.map((item) => {
                return (
                    <>
                        <table>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.no}</td>
                            </tr>
                        </table >
                    </>
                )
            })}
        </>
    )
}
