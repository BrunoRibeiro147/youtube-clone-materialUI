import React from 'react';

import { AppBar as AppBarMaterial, Toolbar, IconButton, Switch, Button, makeStyles, useTheme } from '@material-ui/core';
import { VideoCall, Apps, MoreVert, AccountCircle, Menu } from '@material-ui/icons'

const useStyle = makeStyles(theme => ({
	appBar: {
		boxShadow: 'none',
		zIndex: theme.zIndex.drawer + 1,
	},
	menuIcon: {
		paddingRight: theme.spacing(3),
		paddingLeft: theme.spacing(2)
	},
	searchBar: {
		width: 550,
		borderRadius: 0,
	},
	logo: {
		height: 25
	},
	icons: {
		paddingRight: theme.spacing(4)
	},
	grow: {
		flexGrow: 1
	}
}))


interface AppBarProps {
	darkMode: boolean,
	setDarkMode: Function
}


const AppBar: React.FC<AppBarProps> = ({ darkMode, setDarkMode }) => {
	const classes = useStyle();
	const theme = useTheme();

	return (
		<AppBarMaterial color="inherit" className={classes.appBar}>
			<Toolbar>
				<IconButton className={classes.menuIcon} edge="start" aria-label="menu">
					<Menu />
				</IconButton>
				<img
					src={
						theme.palette.type === 'light' ? "/images/preto.png" : "/images/branco.png"}
					alt="Logo"
					className={classes.logo}
				/>
				<div className={classes.grow} />
				<Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} />
				<IconButton className={classes.icons} edge="start">
					<VideoCall />
				</IconButton>
				<IconButton className={classes.icons} edge="start">
					<Apps />
				</IconButton>
				<IconButton className={classes.icons} edge="start" >
					<MoreVert />
				</IconButton>
				<Button
					startIcon={< AccountCircle />}
					color="secondary"
					variant="outlined">
					Fazer Login
					</Button>
			</Toolbar>
		</AppBarMaterial>
	);
}

export default AppBar;
