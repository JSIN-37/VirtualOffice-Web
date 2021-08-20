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
import attendance from '../resources/attendance.svg';
import task from '../resources/task-mgmt.svg';
import fileMgmt from '../resources/file-mgmt.svg';
import doc from '../resources/doc.svg';
import mobile from '../resources/mobile.svg';
import admin from '../resources/admin.svg';

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
        minHeight: "250px",

    },
    media: {
        margin: "10px auto 0",
        width: "50%",
        height: 200,
        position: "relative",
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
        img: attendance,
        alt: "attendance tracking",
        description: "Store the start and finish times of a working day and how much time they spend working, and on breaks. Also, statuses of the employee during the day are saved."
    },
    {
        title: 'Task Management',
        img: task,
        alt: "task management",
        description: "Store the start and finish times of a working day and how much time they spend working, and on breaks. Also, statuses of the employee during the day are saved."
    },
    {
        title: 'File Management',
        img: fileMgmt,
        alt: "file management",
        description: "Store the start and finish times of a working day and how much time they spend working, and on breaks. Also, statuses of the employee during the day are saved."
    },
    {
        title: 'Document Authentication',
        img: doc,
        alt: "document authentication",
        description: "Store the start and finish times of a working day and how much time they spend working, and on breaks. Also, statuses of the employee during the day are saved."
    },
    {
        title: 'Mobile app',
        img: mobile,
        alt: "mobile app",
        description: "Store the start and finish times of a working day and how much time they spend working, and on breaks. Also, statuses of the employee during the day are saved."
    },
    {
        title: 'Admin Panel',
        img: admin,
        alt: "admin panel",
        description: "Store the start and finish times of a working day and how much time they spend working, and on breaks. Also, statuses of the employee during the day are saved."
    },
];

export default function HomeCards() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            {/* Hero unit */}
            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                    Features
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    VirtualOffice comes with the following features to enable an effective management in your organization.
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