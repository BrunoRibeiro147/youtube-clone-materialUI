import React from 'react';

import {
	Drawer as MaterialDrawer,
	Toolbar,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
	Box,
	Typography,
	Button,
	ListSubheader,
	makeStyles
}
	from '@material-ui/core';

import {
	AddCircle,
	AccountCircle,
	Home,
	Whatshot,
	Subscriptions,
	VideoLibrary,
	History
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
	drawer: {
		width: 240,
		flexShrink: 0,
	},
	drawerPaper: {
		width: 240,
		borderRight: 'none'
	},
	drawerContainer: {
		overflow: 'auto',
	},
	logo: {
		height: 25
	},
	listItem: {
		paddingTop: 4,
		paddingBottom: 4,
	},
	listItemText: {
		fontSize: 14
	},
	subheader: {
		textTransform: 'uppercase'
	},
	icons: {
		paddingRight: theme.spacing(4)
	},
	grow: {
		flexGrow: 1
	}

}));


const Drawer: React.FC = () => {

	const classes = useStyles();

	return (
		<MaterialDrawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<Toolbar />
			<div className={classes.drawerContainer}>
				<List>
					<ListItem button key={'inicio'} classes={{ root: classes.listItem }}>
						<ListItemIcon>{<Home />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Inicio'}
						/>
					</ListItem>
					<ListItem button key={'emAlta'} classes={{ root: classes.listItem }}>
						<ListItemIcon>{<Whatshot />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Em Alta'}
						/>
					</ListItem>
					<ListItem button key={'inscrições'} classes={{ root: classes.listItem }}>
						<ListItemIcon>{<Subscriptions />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Inscrições'}
						/>
					</ListItem>

				</List>
				<Divider />
				<List>
					<ListItem button key={'biblioteca'} classes={{ root: classes.listItem }}>
						<ListItemIcon>{<VideoLibrary />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Biblioteca'}
						/>
					</ListItem>
					<ListItem button key={'historico'} classes={{ root: classes.listItem }}>
						<ListItemIcon>{<History />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Histórico'}
						/>
					</ListItem>
				</List>
				<Divider />
				<Box py={2} px={4}>
					<Typography variant="body2">
						Faça login para curtir vídeos, comentar e se inscrever.
						</Typography>
					<Box mt={2}>
						<Button variant="outlined" color="secondary" startIcon={<AccountCircle />}>
							Fazer Login
							</Button>
					</Box>
				</Box>
				<Divider />
				<List
					component='nav'
					aria-aria-labelledby='nested-list-subheader'
					subheader={
						<ListSubheader
							component="div"
							id='nested-list-subheader'
							className={classes.subheader}
						>
							O Melhor do Youtube
							</ListSubheader>
					}
				>
					<ListItem button classes={{ root: classes.listItem }}>
						<ListItemIcon>{<AddCircle />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Musicas'}
						/>
					</ListItem>
					<ListItem button classes={{ root: classes.listItem }}>
						<ListItemIcon>{<AddCircle />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Esportes'}
						/>
					</ListItem>
					<ListItem button classes={{ root: classes.listItem }}>
						<ListItemIcon>{<AddCircle />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Jogos'}
						/>
					</ListItem>
					<ListItem button classes={{ root: classes.listItem }}>
						<ListItemIcon>{<AddCircle />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Filmes'}
						/>
					</ListItem>
					<ListItem button classes={{ root: classes.listItem }}>
						<ListItemIcon>{<AddCircle />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Notícias'}
						/>
					</ListItem>
					<ListItem button classes={{ root: classes.listItem }}>
						<ListItemIcon>{<AddCircle />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Ao Vivo'}
						/>
					</ListItem>
					<ListItem button classes={{ root: classes.listItem }}>
						<ListItemIcon>{<AddCircle />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Aprender'}
						/>
					</ListItem>
					<ListItem button classes={{ root: classes.listItem }}>
						<ListItemIcon>{<AddCircle />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Vídeos do Momento'}
						/>
					</ListItem>
					<ListItem button classes={{ root: classes.listItem }}>
						<ListItemIcon>{<AddCircle />}</ListItemIcon>
						<ListItemText
							classes={{ primary: classes.listItemText }}
							primary={'Vídeos em 360º'}
						/>
					</ListItem>

				</List>

			</div>
		</MaterialDrawer>
	);
}

export default Drawer;
