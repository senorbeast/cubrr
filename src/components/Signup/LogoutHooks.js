import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { GSignbtn, GIcon } from './SignupElements';

const clientId = '372426328177-edic722e7ta9aj8lsan1g8mp7bh3f9td.apps.googleusercontent.com';

function LogoutHooks() {
	const onLogoutSuccess = (res) => {
		console.log('Logged out Success');
		alert('Logged out Successfully ✌');
	};

	const onFailure = () => {
		console.log('Handle failure cases');
	};

	const { signOut } = useGoogleLogout({
		clientId,
		onLogoutSuccess,
		onFailure
	});

	return (
		<GSignbtn onClick={signOut}>
			<GIcon />
			Sign out
		</GSignbtn>
	);
}

export default LogoutHooks;
