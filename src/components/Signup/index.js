import React from "react";
import LoginHooks from "./LoginHooks";
import LogoutHooks from "./LogoutHooks";
import Navbar from "../Navbar";
import Paper from "@material-ui/core/Paper";
import RegisterMui from "./Register";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
    }}
));
const Signup = (props) => {

    return (
        <div>
            <Navbar
                toggle={props.toggle}
                theme={props.theme}
                setTheme={props.setTheme}
            />
            <LoginHooks />
            <LogoutHooks />
			 
            <Paper eleavation = {3}>
                <RegisterMui />
				</Paper>
	
        </div>
    );
};

export default Signup;
