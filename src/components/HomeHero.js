import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import heroimg from '../resources/hero-img.png';

const useStyles = makeStyles((theme) => ({
    HeroSection: {
        position: 'relative',
        color: "#364695",
        backgroundImage: `url(${heroimg})`,
        backgroundSize: '570px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        margin: "auto",
        backgroundColor: 'transparent',
    },
    container: {
        backgroundColor: '#F9F9F9',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,

    },
    HeroSectionContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },

    },
    button: {
        marginRight: "20px",
    }
}));

export default function HomeHero() {
    const classes = useStyles();
    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.container}>
            <Grid item xs={12} sm={12} md={11}>
                <Paper elevation={0} className={classes.HeroSection} style={{ backgroundImage: { heroimg } }}>
                    <div className={classes.overlay} />
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.HeroSectionContent}>
                                <Typography component="h1" variant="h2" color="inherit" gutterBottom>
                                    VirtualOffice
                                </Typography>
                                <Typography style={{ fontSize: "18px" }} color="inherit" paragraph>
                                    A specialized system that facilitates the level of collaboration analogous to an office environment is a timely requirement for many organizations. VirtualOffice is focusing on the telecommuting of the administrative staff and the non-academic staff of the university. The primary users of the system are desk workers, their managers, and the public to a certain extent. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                                </Typography>
                                <br />
                                <Button disableElevation variant="contained" color="primary" className={classes.button}>
                                    Sign Up
                                </Button>
                                <Button style={{ texttransform: "none" }} variant="outlined" color="primary" className={classes.button}>
                                    Download for Free
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>


    );
}
