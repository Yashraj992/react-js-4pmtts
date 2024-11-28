import React from 'react'
import Data from './Data'

export default function App() {
    return (
        <>
            <div className='w-3/5 mx-auto'>
                <ul className='nav navbar navbar-expand flex justify-around bg-fuchsia-800 p-5 rounded-2xl'>
                    <li><a href="" className='text-white text-3xl font-semibold'>Designer</a></li>
                    <li><a href="" className='text-white text-xl font-semibold'>Category</a></li>
                    <li><a href="" className='text-white text-xl font-semibold'>Designer</a></li>
                </ul>

                <table className='w-full'>
                    {Data && Data.map((item) => {
                        return (
                            <>
                                <tr className='bg-blue-600'>
                                    <td className='p-6 text-white font-semibold'>{item.id}</td>
                                    <td><img src={item.photo} alt="" className='img-fluid w-40'/></td>
                                    <td className='p-6 text-white font-semibold'>{item.name}</td>
                                    <td className='p-6 text-white font-semibold'>{item.age}</td>
                                    <td className='p-6 text-white font-semibold'>{item.contact}</td>
                                </tr>
                            </>
                        )
                    })}
                </table>
            </div>
        </>
    )
}
