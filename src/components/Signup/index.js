import React from "react";
import LoginHooks from "./LoginHooks";
import LogoutHooks from "./LogoutHooks";
import Navbar from "../Navbar";
import Paper from "@material-ui/core/Paper";
import RegisterMui from "./Register";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(0),
        // display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        height: "calc(100vh - 5rem)",
    },
}));
const Signup = (props) => {
    const classes = useStyles();
    return (
        <>
        <Navbar
                toggle={props.toggle}
                theme={props.theme}
                setTheme={props.setTheme}
            />
        <div className={classes.root}>
            <Paper elevation={3} style={{width :"100%", height :"100%"}}>
            <LoginHooks />
            <LogoutHooks />

                <RegisterMui />
            </Paper>
        </div>
        </>
    );
};

export default Signup;
