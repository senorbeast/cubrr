import styled from 'styled-components';
import myImage from '../../icons/google.svg';

export const GSignbtn = styled.ul`
	cursor: pointer;
	display: block;
	font-size: 1.3em;
	//box-sizing: content-box;
	margin: 20px auto 0px;
	width: 10%;
	padding: 15px 20px;
	border-radius: 24px;
	border-color: transparent;
	background-color: white;
	/* box-shadow: 0px 16px 60px rgba(78, 79, 114, 0.1); */
	box-shadow: 0px 16px 60px rgba(78, 79, 114, 0.08);
	position: relative;
	color: #4285f4;
	font-weight: bolder;
	align-items: justify;
	background: ${(props) => props.theme.primary};
`;

export const GIcon = styled.li`
	background: url(${myImage});
	height: 80%;
	width: 20%;
	margin-right: -10px;
	position: absolute;
	left: 20px;
`;
