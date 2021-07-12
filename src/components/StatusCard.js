import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, Typography, Grid, Radio, RadioGroup } from '@material-ui/core';
import { makeStyles, FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {
        breakBtn: {
            background: '#40A0B5',
            color: '#ffffff',
            '&:hover': {
                backgroundColor: '#218297'
            },
            '&:active': {
                boxShadow: 'none'
            },
        }
    }
})



export default function StatusCard() {
    const classes = useStyles()
    return (
        <div>
            <Card variant="outlined" elevation={1}>
                <CardContent>
                    <Grid container align="center" justify="center" alignItems="center">
                        <Grid item xs={3} >
                            <Button disabled variant="contained" size="large" color="primary">Start work</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" size="large" color="primary">Stop Work</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" size="large" className={classes.breakBtn}>Start Break</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button disabled variant="contained" size="large" className={classes.breakBtn}>Stop Break</Button>
                        </Grid>

                        <Grid item xs={2}><br />
                            <Typography variant="h6" size="large" color="initial" pr={2}>I am</Typography>
                        </Grid>
                        <Grid item xs={10}><br />
                            <RadioGroup row>
                                <FormControlLabel variant="h6" size="large" value="available" control={<Radio value="available" />} label={<Typography variant="h6" size="large" color="initial" pr={2}>Available</Typography>} />
                                <FormControlLabel value="busy" control={<Radio value="busy" />} label={<Typography variant="h6" size="large" color="initial" pr={2}>Busy</Typography>} />
                                <FormControlLabel value="onbreak" control={<Radio value="onbreak" />} label={<Typography variant="h6" size="large" color="initial" pr={2}>On Break</Typography>} />
                            </RadioGroup>
                        </Grid>
                    </Grid>


                </CardContent>
            </Card>
        </div>
    )
}