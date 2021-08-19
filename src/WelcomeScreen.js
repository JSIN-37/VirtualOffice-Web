import { makeStyles } from "@material-ui/core/styles";
import HomeHeader from "./components/HomeHeader";
import HomeHero from "./components/HomeHero"
import HomeCards from "./components/HomeCards"
import HomeFooter from "./components/HomeFooter"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        boxSizing: "border-box"
    }
}));

const WelcomeScreen = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HomeHeader />
            <div>
                <HomeHero />
                <HomeCards />
            </div>
            <HomeFooter />
        </div>
    );
};

export default WelcomeScreen;
