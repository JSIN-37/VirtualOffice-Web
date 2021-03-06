import { AppData } from "../App";
import { useContext } from "react";

const LogOut = () => {
  const [, setAppD] = useContext(AppData);
  // Remove from state
  // let tmpAppD = appD;
  // tmpAppD.token = null;
  // setAppD(tmpAppD);
  // Remove from localStorage
  // let tmpCreds = JSON.parse(localStorage.getItem("credentials"));
  // tmpCreds.token = null;
  // localStorage.setItem("credentials", JSON.stringify(tmpCreds));
  setAppD({});
  localStorage.removeItem("credentials");
  localStorage.removeItem("keys");
  var url = window.location.href.split("/");
  window.location.replace(url[0] + "//" + url[2]);
};
export default LogOut;
