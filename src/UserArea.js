import Layout from "./components/hod/Layout";
import Dashboard from "./pages/hod/Dashboard";
import Division from "./pages/hod/Division";
import Teams from "./pages/Teams";
import AddTeam from "./pages/hod/AddTeam";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const UserArea = ({ token, setToken }) => {
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
                    <Route path="/teams">
                        <Teams />
                    </Route>
                    <Route path="/addteam">
                        <AddTeam />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
};

export default UserArea;
