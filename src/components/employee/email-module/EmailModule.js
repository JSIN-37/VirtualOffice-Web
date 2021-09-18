import { Button, Card, Grid, Typography } from '@material-ui/core'
import React, {useState, useEffect, useCallback} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import EmailCard from './EmailCard';
import {emailkeys} from './emailkeys'

const useStyles = makeStyles({
    emailContainer : {
        maxHeight : '400px',
        overflow:'auto'
    }
})

const CLIENT_ID = emailkeys.CLIENT_ID
const API_KEY = emailkeys.API_KEY

export default function EmailModule() {
    const classes = useStyles()


    // Array of API discovery doc URLs for APIs used by the quickstart
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    var SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

    const [signedIn, setSignedIn] = useState(false)
    const [emails, setEmails] = useState([])

    // const handleClientLoad = useCallback(() =>{
    //     window.gapi.load('client:auth2', initClient)
    // })

    const listMail = useCallback(() =>{
        const emailIdArray = []
        window.gapi.client.gmail.users.messages.list({
            'userId':'me'
        }).then( function (response) {
            const msg = JSON.parse(JSON.stringify(response))
            const objectArray = msg.result.messages
            //console.log("RESPONSE FROM GMAIL = ", msg.result.messages)
            objectArray.forEach(function (msg){
                emailIdArray.push(msg.id)
            })
            loadEmails(emailIdArray)
        })
    },[])

    function loadEmails(array){
        array.forEach(function (id){
            //console.log(id)
            window.gapi.client.gmail.users.messages.get({
                'userId':'me',
                'id':`${id}`
            }).then((response) => {
                setEmails((oldEmails)=>{
                    //console.log("googles response ",response)
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

    const handleClientLoad = useCallback(()=>{
        window.gapi.load('client:auth2', initClient)
    },[])
    

    useEffect(() => {
        if(window.gapi){
            handleClientLoad()
        }else{
            return
        }
        if(!window.gapi.client ){
            return
        }else{
            if(window.gapi.client.gmail){
                listMail()
            }else{return}
            
        }
    }, [])

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


    
    return (
        <Card variant="outlined" elevation={1} className={classes.emailContainer}>
            <Grid container alignContent='center' direction='column'>

                <Grid item>
                 <Typography>Email Thing</Typography>
                </Grid>

                <Grid item>
                    {!signedIn && <Button variant='outlined' onClick={handleSignInClick}>Sign In</Button>}
                    {signedIn && <Button variant='outlined' onClick={handleSignOutClick}>Sign Out</Button>}
                </Grid>
                {emails.length >0 && emails.map((email)=>{
                    return <EmailCard  key={email.id} email={email}/>
                })}
                {!emails.length && <Button onClick={listMail}>Load Emails</Button>}
            

            </Grid>
        </Card>
    )
}
