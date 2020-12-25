import React from "react";
import { useGoogleLogin } from "react-google-login";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FcGoogle } from "react-icons/fc";

// refresh token
import { refreshTokenSetup } from "./../../utils/refreshToken";

const clientId =
    "372426328177-edic722e7ta9aj8lsan1g8mp7bh3f9td.apps.googleusercontent.com";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function LoginHooks() {
    const onSuccess = (res) => {
        console.log("Login Success: currentUser:", res.profileObj);
        alert(
            `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log("Login failed: res:", res);
        alert(`Failed to login. 😢`);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: "offline",
        // responseType: 'code',
        // prompt: 'consent',
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
                onClick={signIn}
            >
                Google Login
            </Button>
        </>
    );
}

export default LoginHooks;
