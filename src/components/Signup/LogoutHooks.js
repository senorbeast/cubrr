import React from "react";
import { useGoogleLogout } from "react-google-login";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FcGoogle } from "react-icons/fc";

const clientId =
    "372426328177-edic722e7ta9aj8lsan1g8mp7bh3f9td.apps.googleusercontent.com";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function LogoutHooks() {
    const onLogoutSuccess = (res) => {
        console.log("Logged out Success");
        alert("Logged out Successfully ✌");
    };

    const onFailure = () => {
        console.log("Handle failure cases");
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });
    const classes = useStyles();

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<FcGoogle />}
                onClick={signOut}
            >
                Google Logout
            </Button>
        </>
    );
}

export default LogoutHooks;
