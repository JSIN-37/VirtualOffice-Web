import React from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core'
import SideMenu from './components/hod/SideMenu'
import Header from './components/hod/Header'
import { classes } from 'istanbul-lib-coverage'

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
    appMain: {
        paddingLeft: '280px',
        width: '100%'
    }
}));

const App = () => {
    return (
        <>
            <SideMenu />
            <div className={classes.appMain}>
                <Header />
            </div>
        </>
    );
}

export default App
