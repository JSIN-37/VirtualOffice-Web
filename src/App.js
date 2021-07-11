import React from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core'
import SideMenu from './components/hod/SideMenu'
import Header from './components/hod/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './pages/hod/Dashboard'
import Division from './pages/hod/Division'

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
    appMain: {
        paddingLeft: '280px',
        width: '100%',
        overflow: 'hidden'
    }
}));

const App = () => {
    return (
        <>
            <Router>
                <SideMenu />
                <Header />
                <Route path="/" exact component={Dashboard} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/division" component={Division} />
            </Router>
        </>
    );
}

export default App