import React from "react";
import { Button, Container } from "@mui/material";
import {FaUser} from 'react-icons/fa'

function App(){
    return(
        <>
        <Container>
        <h1>get in touch with google map.</h1>
        <Button variant="contained" color="secondary" startIcon={<FaUser />}>Show More</Button>
        </Container>
        </>
    )
}

export default App