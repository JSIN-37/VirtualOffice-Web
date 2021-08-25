import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import logo from "../resources/home_logo.png";

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    logo: {
        height: "50px",
    },
}));
const footers = [
    {
        title: 'Company',
        description: ['Team JSIN-37', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: ['Attendance Tracking', 'Task Management', 'File Management', 'Document Authentication', 'Admin Panel'],
    },
    {
        title: 'Resources',
        description: ['User Manual', 'Administrator Manual', 'Documentation', 'Github'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                VirtualOffice
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="lg" component="footer" className={classes.footer}>
                <Grid container spacing={3} justifyContent="space-evenly">
                    <img src={logo} alt="logo" className={classes.logo} />

                    {footers.map((footer) => (
                        <Grid item xs={6} sm={2} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="textSecondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    );
}