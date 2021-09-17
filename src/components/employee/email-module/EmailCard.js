import React, { useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Card, Snackbar, Typography } from '@material-ui/core';
import { MyTaskUtils } from '../../../EmployeeArea';

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

    const {taskDB,setTaskDB} = useContext(MyTaskUtils)

    function addToMyTasks(){
        const task = {
            id : email.id,
            title: 'EMAIL REMINDER',
            description : email.snippet,
            inProgress: false,
            overDue: false,
            dueDate: null,
        }

        const arr = taskDB.filter((db)=>db.id === task.id)
        if(arr.length > 0){
            alert('Task already added')
        }else{
            setTaskDB([...taskDB, task])
            setOpen(true)
        }
        

    }

    //for snackbar
    const [open, setOpen] = React.useState(false);
    function handleClose(){
        setOpen(false);
      };

    const classes = useStyles()
    return (<>
        <Card className={`${classes.email} ${email.labelIds[0]==='UNREAD'? classes.unread : classes.read}`} 
        onClick={addToMyTasks} >
            <Typography>{email.snippet}</Typography>
        </Card>

        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        message="Email Added to My Tasks"
    
        />
        </>
    )
}
