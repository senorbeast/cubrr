import React from "react";
import Navbar from "../Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import rubiks_bg from "./rubiks_bg.png";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "calc(100vh - 5rem)",
        backgroundImage: `url(${rubiks_bg})`,
        minHeight: "calc(100vh - 5rem)",
    },
}));

function Home(props) {
    const classes = useStyles();
    return (
        <>
            <Navbar
                toggle={props.toggle}
                theme={props.theme}
                setTheme={props.setTheme}
            />
            {/* <CssBaseline /> */}
            <div className={classes.root}>
                <Typography>Its Hoome</Typography>
            </div>
        </>
    );
}

export default Home;
