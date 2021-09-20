import { Button, Card, Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EmailCard from "./EmailCard";

import { AppData } from "../../../App";
import EmailComposeModal from "./EmailComposeModal";

const useStyles = makeStyles((theme) => ({
  emailContainer: {
    maxHeight: "400px",
    overflow: "auto",
    padding: theme.spacing(2),
    paddingTop: theme.spacing(2),
    marginBottom: "15px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    color: "#000000",
    textAlign: "left",
    paddingLeft: "20px",
  },
}));

export default function EmailModule(props) {

  // Get keys from app data
  const [appD] = React.useContext(AppData);
  const CLIENT_ID = appD.keys.EMAIL_CLIENT_ID;
  const API_KEY = appD.keys.EMAIL_API_KEY;
  const classes = useStyles();

  const isGoogleSignedIn = props.isGoogleSignedIn
  const setIsGoogleSignedIn = props.setIsGoogleSignedIn
  const auth2Instance = props.auth2Instance
  const setAuth2Instance = props.setAuth2Instance

  // Array of API discovery doc URLs for APIs used by the quickstart
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
  ];

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  //var SCOPES = "https://www.googleapis.com/auth/gmail.readonly";

  const [emails, setEmails] = useState([]);


  const listMail = useCallback(() => {
    const emailIdArray = [];
    window.gapi.load('client', ()=>{
      window.gapi.client.init({
        apiKey:API_KEY,
        clientId:CLIENT_ID,
        discoveryDocs : DISCOVERY_DOCS,
      }).then(()=>{
        window.gapi.client.gmail.users.messages
      .list({
        userId: "me",
        labelIds : 'INBOX'
      })
      .then(function (response) {
        console.log("GAPI EMAIL GET RESP", response)
        const msg = JSON.parse(JSON.stringify(response));
        const objectArray = msg.result.messages;
        //console.log("RESPONSE FROM GMAIL = ", msg.result.messages)
        objectArray.forEach(function (msg) {
          emailIdArray.push(msg.id);
        });
        loadEmails(emailIdArray);
      });
      }).catch(()=>{alert('There was an issue with connecting to google servers.')})
      
    })
    
  }, []);

  function loadEmails(array) {
    array.forEach(function (id) {
      //console.log(id)
      window.gapi.client.gmail.users.messages
        .get({
          userId: "me",
          id: `${id}`,
        })
        .then((response) => {
          setEmails((oldEmails) => {
            //console.log("googles response ",response)
            const newMail = {
              id: id,
              snippet: response.result.snippet,
              labelIds: response.result.labelIds,
            };
            return [...oldEmails, newMail];
          });
        });
    });
  }

  function sendEmail(headers, message, callBack){
    var email = ''

    for(var header in headers){
      email += header += ": "+headers[header]+"\r\n";
    }
    email += "\r\n" + message;

    var sendRequest = window.gapi.client.gmail.users.messages.send({
      'userId': 'me',
      'resource': {
        'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
      }
    });

    return sendRequest.execute(callBack)

  }


  useEffect(()=>{
    if(isGoogleSignedIn){
      listMail()
    }
    else{
      return
    }
  },[])

  useEffect(() => {
    if(!isGoogleSignedIn){
    const script = document.createElement('script')
    script.src='https://apis.google.com/js/platform.js'
    document.body.appendChild(script)
    script.onload = () =>{ beginGapiSignIn() }
    }
  },[]);

  function beginGapiSignIn(){
    console.log("BEGIN GAPI SIGN IN")
    window.gapi.load('auth2', ()=>{
      window.gapi.auth2.init({
        client_id:CLIENT_ID
      })
      console.log("GAPI AUTH2 LOADED")
      window.gapi.load("signin2", ()=>{
        console.log("GAPI SIGNIN2 LOADED")
        const params = {
          scope : 'https://mail.google.com https://www.googleapis.com/auth/drive',
          onsuccess: ()=>{
            // listMail()
            // setIsGoogleSignedIn(true)
            // setAuth2Instance(window.gapi.auth2.getAuthInstance())
            // console.log("SIGNED INTO GOOGLE", isGoogleSignedIn, auth2Instance)
            updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get())
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus)
          }
        }
        window.gapi.signin2.render('btn', params)
      })
    })
  }


  function updateSignInStatus(status){
    if(status){
      listMail()
      setIsGoogleSignedIn(true)
      setAuth2Instance(window.gapi.auth2.getAuthInstance())
      console.log("SIGNED INTO GOOGLE", isGoogleSignedIn, auth2Instance)
    }else{
      setIsGoogleSignedIn(false)
      setAuth2Instance(null)
      setEmails([])
      console.log("SIGNED OUT OF GOOGLE, ", isGoogleSignedIn, auth2Instance)
    }
  }

  function handleSignOutClick() {
    auth2Instance.signOut();

  }

  //for sending email
  const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

  return (
    <Card variant="outlined" elevation={1} className={classes.emailContainer}>
      <Grid container justifyContent="space-between" spacing={0}>
        <Grid item>
          <Typography variant="h6" className={classes.title}>
            Emails
            {isGoogleSignedIn && <Button onClick={handleOpen}>Compose Mail</Button>}
          </Typography>
        </Grid>
        <Grid item>
          {!isGoogleSignedIn && (
            <div
              style={{ marginBottom: "15px" }}
              id='btn'
            >
            </div>
          )}
          {/* {isGoogleSignedIn && (
            <Button
              variant="outlined"
              style={{ marginBottom: "15px" }}
              size="small"
              onClick={handleSignOutClick}
            >
              Sign Out
            </Button>
          )} */}
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={0}>
        <Grid item>
          {emails.length > 0 &&
            emails.map((email) => {
              return <EmailCard key={email.id} email={email} />;
            })}
          {!emails.length && isGoogleSignedIn && (
            <Button color="primary" onClick={listMail}>
              Load Emails
            </Button>
          )}
        </Grid>
      </Grid>

      <EmailComposeModal open={open} setOpen={setOpen} sendEmail={sendEmail}/>

    </Card>
  );
}
