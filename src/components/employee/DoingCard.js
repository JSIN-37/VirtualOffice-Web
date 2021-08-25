import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return {
        todoPaper: {
            display: 'flex',
            background: '#E3E6F5',
            marginBottom: "12px"
        },
        content: {
            padding: '10px'
        }
    }
})

export default function DoingCard({ doing }) {
    const classes = useStyles()
    return (
        <Container>
            <Card elevation={0} md={12} spacing={2} className={classes.todoPaper}>
                <Typography variant="body2" pb={1} className={classes.content}>
                    {doing.task}
                </Typography>
            </Card>
        </Container>
    )
}