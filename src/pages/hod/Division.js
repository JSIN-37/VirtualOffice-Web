import React from 'react'
import Container from '@material-ui/core/Grid'
import DivisionHeader from '../../components/DivisionHeader'
import DivisionDetails from '../../components/DivisionDetails'


export default function Division() {
    return (
        <Container>
            <DivisionHeader />
            <DivisionDetails />
        </Container>
    );
}
