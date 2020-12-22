import React from 'react';
import {
	makeStyles,
	Toolbar,
	Box,
	Typography,
	Grid,
	Hidden,
} from '@material-ui/core';
import videos from '../data/data';
import Drawer from '../components/Drawer';
import AppBar from '../components/AppBar';



const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		backgroundColor: theme.palette.background.dark
	},
}))

interface HomeProps {
	darkMode: boolean,
	setDarkMode: Function
}

const Home: React.FC<HomeProps> = ({ darkMode, setDarkMode }) => {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar darkMode={darkMode} setDarkMode={setDarkMode} />
			<Box display="flex">
				<Hidden mdDown>
					<Drawer />
				</Hidden>

				<Box p={8}>
					<Toolbar />
					<Typography
						variant="h5"
						color="textPrimary"
						style={{ fontWeight: 800 }}
					>
						Recomendados
				</Typography>

					<Grid container spacing={3}>
						{
							videos.map(video => (
								<Grid item lg={3} md={4} sm={6} xs={12}>
									<Box>
										<img
											style={{ width: "100%" }}
											alt={video.title}
											src={video.thumb}
										/>
										<Box>
											<Typography
												style={{ fontWeight: 600 }}
												gutterBottom
												variant="body1"
												color="textPrimary"
											>
												{video.title}
											</Typography>
											<Typography
												display="block"
												variant="body2"
												color="textSecondary"
											>
												{video.channel}
											</Typography>
											<Typography variant="body2" color="textSecondary">
												{`${video.views} * ${video.date}`}
											</Typography>
										</Box>
									</Box>
								</Grid>
							))
						}

					</Grid>

				</Box>
			</Box>
		</div>
	)
}

export default Home;