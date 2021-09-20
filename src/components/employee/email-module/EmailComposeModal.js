import { Card, CardContent, FormControl, Grid, InputLabel, Modal, OutlinedInput, TextField, Button, Snackbar } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { sub } from 'date-fns';


const useStyles = makeStyles({
    modal: {
      marginLeft: '20%',
      marginRight:'20%',
      marginTop: '5%',
      background:'paper'
    },
    modalChild: {
        width:'400px',
        marginBottom: 10
    },
  });

export default function EmailComposeModal(props) {
    const classes = useStyles()
    const {open, setOpen, sendEmail} = props
    const handleClose = () => {
        setOpen(false);
      };

    const [receipient, setReceipient] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    function handleReceipientChange(e){
        setReceipient(e.target.value)
    }
    function handleSubjectChange(e){
        setSubject(e.target.value)
    }
    function handleBodyChange(e){
        setBody(e.target.value)
    }

    //for snackbar
    const [snackOpen, setSnackOpen] = React.useState(false);
    function handleSnackClose() {
        setSnackOpen(false);
    };
    
    function callBack(){
        setSnackOpen(true)
        handleClose()
    }

    function handleSendClick(){
        const headers = { 'To':`${receipient}`, 'Subject':`${subject}`}
        const message = `${body}`
        sendEmail(headers, message, callBack)
    }

    return (
        <>
        <Modal className={classes.modal} open={open} onClose={handleClose}>
            <Card>
                <CardContent>
                <Grid container direction='column' justifyContent='space-evenly' alignItems='center' >
            <FormControl variant='outlined' className={classes.modalChild}>
                <InputLabel  htmlFor='send-to'>Send To: </InputLabel>
                <OutlinedInput 
                    id='send-to'
                    label='Send To'
                    value={receipient}
                    onChange={handleReceipientChange}
                />
            </FormControl>
            <FormControl variant='outlined' className={classes.modalChild}>
                <InputLabel htmlFor='subject'>Subject </InputLabel>
                <OutlinedInput
                    id='subject'
                    label='subject'
                    value={subject}
                    onChange={handleSubjectChange}
                />
            </FormControl>
            <TextField className={classes.modalChild}
                id='body'
                label='Email Body'
                multiline
                rows={4}
                variant='outlined'
                value={body}
                onChange={handleBodyChange}
            />

            <Button variant='outlined' onClick={handleSendClick}>Send</Button>
            </Grid>
                </CardContent>
            </Card>
        </Modal>

        <Snackbar 
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={snackOpen}
            onClose={handleSnackClose}
            autoHideDuration={2000}
            message="Email Sent" />
        </>
    )
}
