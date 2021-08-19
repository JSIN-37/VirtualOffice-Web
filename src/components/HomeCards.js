import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    card: {
        borderRadius: 10,
        boxShadow: "0 8px 20px -12px rgba(0,0,0,0.3)",
    },
    cardHeader: {
        backgroundColor: '#E3E6F5',
        fontWeight: '400'
    },
    cardImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    }
}));

const tiers = [
    {
        title: 'Attendance Tracking',
        img: require("../resources/logo.png"),
        alt: "attendance-tracking",
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support']
    },
    {
        title: 'Task Management',
        img: require("../resources/logo.png"),
        alt: "attendance-tracking",
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support']
    },
    {
        title: 'File Management',
        img: require("../resources/logo.png"),
        alt: "attendance-tracking",
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ]
    },
    {
        title: 'Document Authentication',
        img: require("../resources/logo.png"),
        alt: "attendance-tracking",
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ]
    },
    {
        title: 'eReception',
        img: require("../resources/logo.png"),
        alt: "attendance-tracking",
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ]
    },
    {
        title: 'Admin Panel',
        img: require("../resources/logo.png"),
        alt: "attendance-tracking",
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ]
    },
];

export default function HomeCards() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            {/* Hero unit */}
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Features
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Quickly build an effective pricing table for your potential customers with this layout.
                    It&apos;s built with default Material-UI components with little customization.
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="lg" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        <Grid item key={tier.title} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ variant: 'h6', align: 'center' }}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardImage}>
                                        <img src={require("../resources/logo.png")} alt={tier.alt} className={classes.logo} />
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* Footer */}
        </React.Fragment>
    );
}