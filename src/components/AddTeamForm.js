import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    field: {
        width: 370,
        marginTop: 10,
        marginBottom: 10,
    }
})

export default function Create() {
    const classes = useStyles()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [leader, setLeader] = useState('')
    const [nameError, setNameError] = useState(false)
    const [descriptionError, setDescriptionError] = useState(false)
    const [leaderError, setLeaderError] = useState(false)
    const [division, setDivision] = React.useState('');

    const handleChange = (event) => {
        setDivision(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setNameError(false)
        setDescriptionError(false)

        if (name === '') {
            setNameError(true)
        }
        if (description === '') {
            setDescriptionError(true)
        }
        if (leader === '') {
            setLeaderError(true)
        }
        if (name && description && leader) {
            console.log()
        }
    }

    return (
        <Container>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField className={classes.field}
                    onChange={(e) => setName(e.target.value)}
                    label="Team Name"
                    variant="filled"
                    color="primary"
                    fullWidth
                    required
                    error={nameError}
                />
                <TextField className={classes.field}
                    onChange={(e) => setDescription(e.target.value)}
                    label="Description"
                    variant="filled"
                    color="primary"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={descriptionError}
                />
                <FormControl variant="filled" className={classes.field}>
                    <InputLabel id="demo-simple-select-filled-label">Division</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={division}
                        onChange={handleChange}
                    >
                        <MenuItem value=""> None </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                    </Select>
                </FormControl>
                <TextField className={classes.field}
                    onChange={(e) => setLeader(e.target.value)}
                    label="Leader"
                    variant="filled"
                    color="primary"
                    fullWidth
                    required
                    error={leaderError}
                />
                <br />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained">
                    Submit
                </Button>
            </form>


        </Container>
    )
}
