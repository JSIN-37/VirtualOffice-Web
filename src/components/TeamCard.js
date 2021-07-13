import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CreateIcon from '@material-ui/icons/Create';
import { Button, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {
        info: {
            textAlign: 'left',
        },
        data: {
            textAlign: 'right',
        }
    }
})

export default function TeamCard({ team, handleDelete }) {
    const classes = useStyles()
    return (
        <div>
            <Card variant="outlined" elevation={1} style={{ borderRadius: '10px' }}>
                <CardHeader style={{ paddingLeft: '25px' }}
                    title={team.name}
                />
                <CardContent style={{ paddingTop: '0' }}>
                    <Grid container style={{ padding: 8 }}>
                        <Grid item xs={6}>
                            <Typography variant="h6" color="primary" className={classes.info}>
                                Team Leader:
                            </Typography>
                            <Typography variant="h6" color="primary" className={classes.info}>
                                Division:
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" color="primary" pb={1} className={classes.data}>
                                {team.leader}
                            </Typography>
                            <Typography variant="h6" color="primary" pb={1} className={classes.data}>
                                {team.division}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        style={{
                            marginLeft: '8px'
                        }}
                        startIcon={<CreateIcon />
                            // onClick={()}
                        }
                    >Edit
                    </Button>
                    <IconButton color="secondary" onClick={() => handleDelete(team.id)}>
                        <DeleteIcon /></IconButton>
                </CardContent>
            </Card>
        </div>
    )
}