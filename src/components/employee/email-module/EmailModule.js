import { Button, Card, Grid, Typography } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import EmailCard from './EmailCard';

const useStyles = makeStyles({
    emailContainer : {
        maxHeight : '400px',
        overflow:'auto'
    }
})

const CLIENT_ID = "enter key";
const API_KEY = 'enter-key';


export default function EmailModule() {
    const classes = useStyles()
    console.log("RENDER EMAIL")

    

    // Array of API discovery doc URLs for APIs used by the quickstart
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    var SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

    const [signedIn, setSignedIn] = useState(false)
    const [emails, setEmails] = useState([])


    useEffect(() => {
        handleClientLoad()
    }, [])

    useEffect(()=>{
        listMail()
    }, emails)

    function handleClientLoad(){
        window.gapi.load('client:auth2', initClient)
    }
    
    function initClient(){
        window.gapi.client.init({
            apiKey : API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs : DISCOVERY_DOCS,
            scope : SCOPES
        }).then(function(){
            //listen to changes to signed in status
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)

            //first sign in
            updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());

        })
    }

    function updateSigninStatus(signedIn){
        //true if signed in, false if signed out.
        if(signedIn){
            setSignedIn(true)
        }else{
            setSignedIn(false)
        }
    }

    function handleSignInClick(){
        window.gapi.auth2.getAuthInstance().signIn()
        
    }

    function handleSignOutClick(){
        window.gapi.auth2.getAuthInstance().signOut();
    }

    const emailIdArray = []
    function listMail(){
        window.gapi.client.gmail.users.messages.list({
            'userId':'me'
        }).then( function (response) {
            const msg = JSON.parse(JSON.stringify(response))
            const objectArray = msg.result.messages
            console.log("RESPONSE FROM GMAIL = ", msg.result.messages)
            objectArray.map((obj)=>{
                emailIdArray.push(obj.id)
            })
            loadEmails(emailIdArray)
        })

        

    }

    function loadEmails(array){
        array.map((id)=>{
            console.log(id)
            window.gapi.client.gmail.users.messages.get({
                'userId':'me',
                'id':`${id}`
            }).then((response) => {
                setEmails((oldEmails)=>{
                    console.log("googles response ",response)
                    const newMail = {
                        id : id,
                        snippet : response.result.snippet,
                        labelIds : response.result.labelIds
                    }
                    return [...oldEmails, newMail]
                })
            })
        })
    }

    
    console.log("EMS", emails)
    return (
        <Card variant="outlined" elevation={1} className={classes.emailContainer}>
            <Grid container alignContent='center' direction='column'>

                <Grid item>
                 <Typography>Email Thing</Typography>
                </Grid>

                <Grid item>
                    {!signedIn && <Button variant='outlined' onClick={handleSignInClick}>Sign In</Button>}
                    {signedIn && <Button variant='outlined' onClick={handleSignOutClick}>Sign Out</Button>}
                    {/* <Button variant='outlined' onClick={listMail}>Show Mail</Button> */}

                </Grid>

                {emails.length && emails.map((email)=>{
                    return <EmailCard email={email}/>
                })}
            

            </Grid>
        </Card>
    )
}
