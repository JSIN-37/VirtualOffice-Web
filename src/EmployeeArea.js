import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/hod/Layout";
import Dashboard from "./pages/hod/Dashboard";
import Division from "./pages/hod/Division";
import Teams from "./pages/Teams";
import Attendance from "./pages/hod/Attendance";
import Profile from "./pages/Profile";
import LogOut from "./pages/LogOut";
import LogIn from "./pages/LogIn";

const EmployeeArea = ({ appD, setAppD }) => {
    if (appD.token && appD.isAdmin == null) {
        return (
            <Router basename="/employee">
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Dashboard />
                        </Route>
                        <Route exact path="/division">
                            <Division />
                        </Route>
                        <Route exact path="/teams">
                            <Teams />
                        </Route>
                        <Route exact path="/attendance">
                            <Attendance />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                        <Route exact path="/logout">
                            <LogOut appD={appD} setAppD={setAppD} />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        );
    } else {
        return <LogIn onLogin={setAppD} appD={appD} />;
    }
};

export default EmployeeArea;
