import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>We are using material UI!</h1>
        <Button variant="contained" color="primary">
          VirtualOffice!
        </Button>
        <Switch inputProps={{ "aria-label": "primary checkbox" }} />
      </header>
    </div>
  );
}

export default App;
