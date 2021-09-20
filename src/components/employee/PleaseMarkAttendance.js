import React from 'react';
import { Alert } from '@material-ui/lab';

export default function PleaseMarkAttendance() {
    return (
        <div style={{padding: 5}}>
            <Alert severity="warning">Please check-in with your VirtualOffice mobile application!</Alert>
        </div>
    )
}
