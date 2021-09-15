import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles({

    email: {
        marginTop:20,
        width : '100%',
        height :'40px',
        overflow:'auto',
        cursor:'pointer'
    },

    unread : {
        background : 'coral'
    },
    read:{
        background : 'green'
    }

}
)

export default function EmailCard({email}) {

    function addToTasks(){
        const task = {
            id : email.id,
            title : 'Email Item',
            description : email.snippet,
            inProgress: false,
            overDue: false,
            dueDate: null,
          };
        console.log("ADDING TASK", task)

    }




    const classes = useStyles()
    return (
        <Card className={`${classes.email} ${email.labelIds[0]==='UNREAD'? classes.unread : classes.read}`} onClick={addToTasks}>
            <Typography>{email.snippet}</Typography>
        </Card>
    )
}
