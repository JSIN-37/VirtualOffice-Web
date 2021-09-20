import React from 'react';
import { Alert } from '@material-ui/lab';

export default function WorkDone() {
    return (
        <div style={{padding: 5}}>
            <Alert severity="success">You have already checked-out!</Alert>
        </div>
    )
}
