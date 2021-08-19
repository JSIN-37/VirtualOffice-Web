import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import img1 from '../resources/logo.png';

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
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
    },
}));

const tiers = [
    {
        title: 'Attendance Tracking',
        img: img1,
        alt: "attendance tracking",
        description: "Store the start and finish times of a working day and how much time they spend working, and on breaks. Also, statuses of the employee during the day are saved."
    },
    {
        title: 'Task Management',
        img: img1,
        alt: "task management",
        description: "The users can log their activities categorized as tasks to be done, tasks in progress, and completed tasks."
    },
    {
        title: 'File Management',
        img: img1,
        alt: "file management",
        description: "Connecting an employee’s preferred cloud storage service and managing office documents can be done through VirtualOffice. "
    },
    {
        title: 'Document Authentication',
        img: img1,
        alt: "document authentication",
        description: "VirtualOffice enable the employees to have a method to simply deal with signing documents, hosting them on their storage service, and managing permissions to them"
    },
    {
        title: 'eReception',
        img: img1,
        alt: "eReception",
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ]
    },
    {
        title: 'Admin Panel',
        img: img1,
        alt: "admin panel",
        description: "System administration; setting up and managing all the configuration aspects of the system. This includes user, role, organizational policy, and hierarchy management."
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
                                <CardMedia
                                    className={classes.media}
                                    image={tier.img}
                                    title={tier.alt}
                                />
                                <CardContent >
                                    <Typography component="p" variant="body1" align="justify" style={{ padding: "10px" }}>
                                        {tier.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* Footer */}
        </React.Fragment>
    );
}