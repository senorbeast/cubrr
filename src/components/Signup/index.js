import React from 'react';
import LoginHooks from './LoginHooks';
import LogoutHooks from './LogoutHooks';
import Navbar from "../Navbar"

const Signup = (props) => {
	return (
		<div>
			<Navbar toggle={props.toggle} theme={props.theme} setTheme={props.setTheme} />
			<LoginHooks />
			<LogoutHooks />
		</div>
	);
};

export default Signup;
