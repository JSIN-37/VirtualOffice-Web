import React from "react";

import LogIn from "./pages/LogIn";
import UserArea from "./UserArea";
import AdminArea from "./AdminArea";

function Routes() {
  const [token, setToken] = React.useState("");
  const [admin, setAdmin] = React.useState(false);
  if (token) {
    if (admin) {
      return <AdminArea token={token} setToken={setToken} />;
    } else {
      return <UserArea token={token} setToken={setToken} />;
    }
  } else {
    return <LogIn onLogin={setToken} onAdmin={setAdmin} />;
  }
}

export default Routes;
