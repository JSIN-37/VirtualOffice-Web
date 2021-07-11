import React from "react";
import LogIn from "./pages/LogIn";
import UserArea from "./UserArea";

const App = () => {
  const [token, setToken] = React.useState("");
  if (token) {
    return <UserArea token={token} setToken={setToken} />;
  } else {
    return <LogIn onLogin={setToken} />;
  }
};

export default App;
