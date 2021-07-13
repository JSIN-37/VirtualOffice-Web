import Layout from "./components/hod/Layout";
import Dashboard from "./pages/hod/Dashboard";
import Division from "./pages/hod/Division";
import Teams from "./pages/Teams";
import AddTeam from "./pages/hod/AddTeam";
import ViewTeam from "./pages/hod/ViewTeam";
import EditTeam from "./pages/hod/EditTeam";
import Attendance from "./pages/hod/Attendance";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

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
                    <Route path="/viewteam">
                        <ViewTeam />
                    </Route>
                    <Route path="/editteam">
                        <EditTeam />
                    </Route>
                    <Route path="/attendance">
                        <Attendance />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
};

export default UserArea;
