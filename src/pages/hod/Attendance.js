import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import AttendanceHeader from '../../components/hod/AttendanceHeader'
import AttendanceTable from '../../components/hod/AttendanceTable'
import { Button } from '@material-ui/core'

export default function Attendance() {
    function createData(id, name, date, startTime, endTime, attendance, leaveType, totalHours, breakHours, netHours, status) {
        return { id, name, date, startTime, endTime, attendance, leaveType, totalHours, breakHours, netHours, status };
    }
    // eslint-disable-next-line
    const [rows, setRows] = useState([
        createData('1', 'D.S. Perera', '12/06/2021', '9.00 AM', '5.00 PM', 'Present', '-', '8', '1.37', '7.23', 'Available'),
        createData('2', 'W. P. De Silva', '12/06/2021', '10.00 AM', '5.00 PM', 'Present', 'Short Leave', '8', '1', '6', 'Busy'),
        createData('3', 'A. L. Pathirana', '12/06/2021', '9.00 AM', '5.00 PM', 'Present', '-', '8', '1.37', '7.23', 'Available'),
        createData('4', 'K. H. H. Gamage', '12/06/2021', '12.00 PM', '5.00 PM', 'Present', 'Half Day', '8', '1', '4', 'Busy'),
        createData('5', 'D.M. Dunuwila', '12/06/2021', '9.00 AM', '5.00 PM', 'Present', '-', '8', '1.37', '7.23', 'Available'),
        createData('6', 'S.S. Dias', '12/06/2021', '-', '-', 'Absent', '-', '8', '0', '0', '-'),
        createData('7', 'J.Y. Perera', '12/06/2021', '9.00 AM', '5.00 PM', 'Present', '-', '8', '1.37', '7.23', 'Available'),
        createData('8', 'W. P. De Silva', '11/06/2021', '10.00 AM', '5.00 PM', 'Present', 'Short Leave', '8', '1', '6', 'Busy'),
        createData('9', 'D.M. Dunuwila', '11/06/2021', '9.00 AM', '5.00 PM', 'Present', '-', '8', '1.37', '7.23', 'Available'),
        createData('10', 'W. P. De Silva', '11/06/2021', '10.00 AM', '5.00 PM', 'Present', 'Short Leave', '8', '1', '6', 'Available'),
    ])

    return (
        <Grid container spacing={4}>
            <AttendanceHeader />
            <Grid item xs={12} >
                <AttendanceTable rows={rows} />
            </Grid>
            <Button variant="contained" color="primary" style={{ marginLeft: '25px' }}>Export To Excel</Button>
        </Grid>
    );
}
