//called from -> TaskReportsPane.js and TeamOverview.js -> TeamCard.js
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    OutlinedInput,
    TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';


const useStyles = makeStyles({
    input: {
        marginTop: 20,
        width: '80%',
    },
});

export default function TempAddTask(props) {
    console.log("temp task js props ", props)
    const addTask = props.addTask;
    const addTaskTeamVersion = props.addTaskTeamVersion || null
    const teamName = props.teamName || null
    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleInput() {
        if (!(title && description)) return;

        const id = uuidv4();
        const task = {
            id,
            title,
            description,
            inProgress: false,
            overDue: false,
            dueDate: null,
        };
        console.log(task);
        if(addTaskTeamVersion){
            const teamTask = { ...task, team: teamName }
            console.log("team task = ", teamTask)
            addTaskTeamVersion(teamTask)
        }else{
            addTask(task);
        }
        
        setTitle('');
        setDescription('');
    }

    return (
        <Grid
            container
            direction='column'
            justifyContent='space-evenly'
            alignItems='center'
        >
            <FormControl variant='outlined' className={classes.input}>
                <InputLabel htmlFor='task-title'>Task Title</InputLabel>
                <OutlinedInput
                    id='task-title'
                    label='Task Title'
                    value={title}
                    onChange={handleTitleChange}
                />
            </FormControl>

            <TextField
                onChange={handleDescriptionChange}
                className={classes.input}
                id='task-description'
                label='Task Description'
                multiline
                rows={4}
                variant='outlined'
                value={description}
            />
            <Button
                onClick={handleInput}
                className={classes.input}
                variant='contained'
                color='primary'
                startIcon={<PostAddRoundedIcon />}
            >
                Add
            </Button>
        </Grid>
    );
}
