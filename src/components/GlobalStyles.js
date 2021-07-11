import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
    appMain: {
        paddingLeft: '280px',
        width: '100%'
    }
}));

const GlobalStyles = () => {
    useStyles();

    return null;
};

export default GlobalStyles;