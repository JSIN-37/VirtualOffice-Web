import React from 'react'
import Container from '@material-ui/core/Grid'
import DivisionHeader from './DivisionHeader'
import DivisionDetails from './DivisionDetails'


export default function Division() {
    return (
        <Container>
            <DivisionHeader />
            <DivisionDetails />
        </Container>
    );
}
