import axios from 'axios';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

export default function Dictionary() {
    const [data, setData] = useState("");

    const [search, setSearch] = useState("");

    function getMeaning() {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${search}`).then((response) => {
            setData(response.data[0]);
        })
    }

    const playAudio = () => {
        let audio = new Audio(data.phonetics[0].audio);
        audio.play();
    }
    return (
        <>
            <Container className='mt-5 p-5 rounded bg-secondary shadow text-center'>
                <h1 className='p-1 text-white'>Dictionary App</h1>

                <div className="form-group w-50 mx-auto mt-5">
                    <input type="text" onChange={(e) => setSearch(e.target.value)} className='form-control' placeholder='Enter a word...' />
                </div>

                <div className="form-group mt-2">
                    <button type="button" onClick={getMeaning} className='btn btn-success text-white btn-lg' placeholder='Enter a word...'><span className='bi bi-search'></span></button>
                </div>

                {data && (

                    <div className='showResult mt-4'>
                        <h1 className='p-1'>{data.word}{" "} <button type='button' className='btn btn-light border border-0 text-success' onClick={() => { playAudio() }}><span className='bi bi-megaphone-fill'></span></button></h1>
                        <h1 className='p-1'>Part of Speech</h1>
                        <p className='p-1'>{data.meanings[0].partOfSpeech}</p>
                        <h2 className='text-center p-1'>Definitions</h2>
                        <p className='p-1'>{data.meanings[0].definitions[0].definition}</p>
                        <h3 className='text-center p-1'>Examples</h3>
                        <p className='p-1'>{data.meanings[0].definitions[0].example}</p>
                    </div>
                )}

            </Container>
        </>
    )
}
