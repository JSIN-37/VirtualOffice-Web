import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/hod/Dashboard'
import Division from './pages/hod/Division'
import Teams from './pages/Teams'
import Layout from './components/hod/Layout'
import LogIn from "./pages/LogIn";

function Routes() {
    const [token, setToken] = React.useState("");
    const [admin, setAdmin] = React.useState(false);
    if (token) {
        if (admin){
            // add in your code here
            // return(<AdminArea/>);
            alert('janadhis stuff');
        }
        else{

            return (
                <Router>
                    <Layout>
                        <Switch>
                            <Route exact path="/">
                                <Dashboard />
                            </Route>
                            <Route path="/division">
                                <Division />
                            </Route>
                            <Route path="/teams" >
    
                            </Route>
                        </Switch>
                    </Layout>
                </Router>
            );
        }
        // return <UserArea token={token} setToken={setToken} />;
    } else {
        return <LogIn onLogin={setToken} onAdmin={setAdmin}/>;
    }
}

export default Routes;