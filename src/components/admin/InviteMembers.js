import React from 'react';
import "../../App.css";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import OfficeImage from '../../resources/logo_big.png';
import Grid from '@material-ui/core/Grid';
import { sizing } from '@material-ui/system';
import ClearIcon from '@material-ui/icons/Clear';




function InviteMembers() {

    return(
<Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
    >
  
    <Grid item xs={6}>
      <Card style={{ width: '40rem',
            textAlign: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            padding: '20px',
            border:'1',
            borderColor: 'text.primary'
    }}
      >
        <img src={OfficeImage} className="VO-logo" alt="logo" />
        <p align="left">Invite Members</p>


        <table width="100%">

        <tr>
            <th>
              Name
            </th>

            <th>
              Email Address
            </th>

            <th>

            </th>

          </tr>

          <tr>
            <td>
              <TextField
                id="Text" 
                placeholder="D G Perera"
                variant="outlined"
                />
            </td>
            

            <td>
            <TextField
                id="Text"
                placeholder="E mail"
                variant="outlined"
              />

            </td>
            
            <td>
            <ClearIcon/>
            </td>


          </tr>

          <tr>
          <td>
              <TextField
                id="Text"
                placeholder="D G Perera"
                variant="outlined"
                />
            </td>
            

            <td>
            <TextField
                id="Text"
                placeholder="E mail"
                variant="outlined"
              />

            </td>
            
            <td>
            <ClearIcon/>
            </td>
          </tr>


          <tr>
          <td>
              <TextField
                id="Text"
                placeholder="D G Perera"
                variant="outlined"
                />
            </td>
            

            <td>
            <TextField
                id="Text"
                placeholder="E mail"
                variant="outlined"
              />

            </td>
            
            <td>
            <ClearIcon/>
            </td>
          </tr>

        </table>

        <Grid
        container
        spacing={0}
        direction="column"
        alignItems= "flex-start"
        justify="center"
        justifyContent="flex-start"
        style={{ minHeight: '8vh' }}
      >
          
          <Button color="primary">Add New</Button>
      </Grid>


        <Grid
        container
        spacing={0}
        direction="column"
        alignItems= "flex-end"
        justify="center"
        justifyContent="flex-end"
        style={{ minHeight: '8vh' }}
      >
          <Button variant="contained" color="primary">
            Send Invitation
          </Button>
      </Grid>
        
      </Card>
    </Grid>      
   </Grid>



    );


}

export default InviteMembers;
