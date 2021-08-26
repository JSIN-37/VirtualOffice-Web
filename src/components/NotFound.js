import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import notfound from '../resources/notfound.svg'

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#fff",
    },
    title: {
        margin: 50,
    },
    image: {
        height: 300,
        width: 300,
        marginRight: 60,
    },
    text: {
        fontWeight: 400,
        marginTop: 10,
    },
    list: {
        marginLeft: 20
    }
});
export default function NotFound() {
    const classes = useStyles();
    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.root}>
            <Grid item xs={12} align="center">
                <Typography variant="h2" color="primary" className={classes.title}>Page Not Found</Typography>
            </Grid>
            <Grid item xs={1} align="right"></Grid>
            <Grid item xs={5} align="right">
                <img src={notfound} alt="not found" className={classes.image} />
            </Grid>
            <Grid item xs={5}>
                <Typography color="primary" variant="h5" className={classes.text}>Unfortunately, the page you requested does not exist.</Typography>
                <Typography color="primary" variant="h6" className={classes.text}>The reason might be:</Typography>
                <Typography color="primary" variant="body1" className={classes.list}>The page has moved</Typography>
                <Typography color="primary" variant="body1" className={classes.list}>The page no longer existS</Typography>
                <Typography color="primary" variant="body1" className={classes.list}>The page has moved</Typography>
                <Typography color="primary" variant="body1" className={classes.list}>The address (URL) is not correct</Typography>
                <br />
                <Button variant="contained" component={Link} to="/" color="primary" style={{ marginTop: 10 }}> Back to Home </Button>
            </Grid>
            <Grid item xs={1} align="right"></Grid>
        </Grid>
    )
}