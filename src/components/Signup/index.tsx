import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import LoginHooks from './LoginHooks';
import LogoutHooks from './LogoutHooks';
import Navbar from '../Navbar';
import RegisterMui from './Register';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(0),
        // display: "flex",
        // flexDirection: "column",
        alignItems: 'center',
        height: 'calc(100vh - 5rem)',
    },
}));
interface CmProps {
    toggle: () => void;
    theme: string;
    setTheme: React.Dispatch<any>;
}
const Signup = (props: CmProps) => {
    const classes = useStyles();
    return (
        <>
            <Navbar toggle={props.toggle} theme={props.theme} setTheme={props.setTheme} />
            <div className={classes.root}>
                <Paper elevation={3} style={{ width: '100%', height: '100%' }} square>
                    <LoginHooks />
                    <LogoutHooks />

                    <RegisterMui />
                </Paper>
            </div>
        </>
    );
};

export default Signup;
