import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from '@material-ui/core';

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

    const classes = useStyles()
    return (
        <Card className={`${classes.email} ${email.labelIds[0]==='UNREAD'? classes.unread : classes.read}`} >
            <Typography>{email.snippet}</Typography>
        </Card>
    )
}
