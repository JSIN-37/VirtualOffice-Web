import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core'
import { ChatEngine } from 'react-chat-engine';
import { AppData } from '../../../App'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        boxSizing: "border-box",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
}));

export default function ChatModule() {
    const classes = useStyles();
    const [appD] = React.useContext(AppData)
    console.log("IN chat module, user = ", appD)
    const userName = `${appD.user.first_name} ${appD.user.last_name}`
    return (
        <Container className={classes.root}>
            <ChatEngine
                projectID='920a55aa-99cc-4f00-9ff9-9b660040956f'
                userName={userName}
                userSecret='123'
                height='85vh'
                width='85vh'
            />
        </Container>
    )
}
