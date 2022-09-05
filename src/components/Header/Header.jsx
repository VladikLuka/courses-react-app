import React from 'react';
import './Header.css';
import { Grid } from '@mui/material';
import { Logo } from './components/Logo/Logo.jsx';
import LoginButton from '../../common/Button/LoginButton';

export default function Header() {
	return (
		<div className='header'>
			<Grid container>
				<Grid item xs={6}>
					<Logo />
				</Grid>
				<Grid item xs={6}>
					<LoginButton />
				</Grid>
			</Grid>
		</div>
	);
}
