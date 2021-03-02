import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Carousel from 'react-material-ui-carousel'
import _ from 'lodash'

import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	Button,
	Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	imageGrid: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	gridTextContent: {
		padding: theme.spacing(4)
	},
	carouselItemMedia: {
		height: '100%',
		backgroundColor: '#fff',
		overflow: 'hidden',
		position: 'relative',
		transition: '300ms',
		cursor: 'pointer',
		'&:hover': {
			filter: 'brightness(115%)'
		}
	},
	Banner: {
		height: '80vh',
		position: 'relative',
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(6),
		[theme.breakpoints.down('sm')]: {
			height: '40vh'
		}
	},
	BannerGrid: {
		height: '100%',
		position: 'relative'
	},
	carouselContent: {
		backgroundColor: 'darkred',
		height: '100%',
		position: 'relative',
		cursor: 'pointer',
		padding: theme.spacing(4),
		color: '#fff',
		transition: '300ms',
	},
	carouselTitle: {
		fontSize: 60,
		fontWeight: '500',
		textOverflow: 'ellipsis',
		[theme.breakpoints.down('sm')]: {
			fontSize: 20
		}
	},
	carouselCaption: {
		marginTop: '10px',
		fontSize: 30,
		[theme.breakpoints.down('sm')]: {
			fontSize: 16
		}
	},
	carouselButton: {
		'&:hover': {
			backgroundColor: '#fff',
			color: 'darkred'
		},
		marginTop: theme.spacing(8),
		color: '#fff',
		fontSize: 20,
		border: '3px solid white',
		textTransform: 'capitalize',
		transition: '200ms',
		[theme.breakpoints.down('sm')]: {
			fontSize: 14
		}
	},
	mediaCaption: {
		textOverflow: 'ellipsis',
		position: 'absolute',
		bottom: 0,
		padding: '15px',
		backgroundColor: '#000',
		opacity: .6,
		color: '#fff',
		fontSize: 20,
		fontWeight: 500,
		transition: '300ms',
		cursor: 'pointer',
		width: '100%',
		height: '10%',

		'&:hover': {
			opacity: .8
		}
	}
}))

const items = [
	{
		Name: "Electronics",
		Caption: "Electrify your friends!",
		contentPosition: "left",
		Items: [
			{
				Name: "Macbook Pro",
				Image: "https://source.unsplash.com/featured/?macbook"
			},
			{
				Name: "iPhone",
				Image: "https://source.unsplash.com/featured/?iphone"
			}
		]
	},
	{
		Name: "Home Appliances",
		Caption: "Say no to manual home labour!",
		contentPosition: "middle",
		Items: [
			{
				Name: "Washing Machine WX9102",
				Image: "https://source.unsplash.com/featured/?washingmachine"
			},
			{
				Name: "Learus Vacuum Cleaner",
				Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
			}
		]
	},
	{
		Name: "Decoratives",
		Caption: "Give style and color to your living room!",
		contentPosition: "right",
		Items: [
			{
				Name: "Living Room Lamp",
				Image: "https://source.unsplash.com/featured/?lamp"
			},
			{
				Name: "Floral Vase",
				Image: "https://source.unsplash.com/featured/?vase"
			}
		]
	}
]

const Item = (props) => {
	const classes = useStyles()

	const contentPosition = props.contentPosition ? props.contentPosition : "left"
	const totalItems = props.length ? props.length : 3;
	const mediaLength = totalItems - 1;

	let items = [];
	const content = (
		<Grid item xs={12 / totalItems} key="content" className={classes.carouselItemContainer}>
			<CardContent className={classes.carouselContent}>
				<Typography className={classes.carouselTitle}>
					{props.item.Name}
				</Typography>

				<Typography className={classes.carouselCaption}>
					{props.item.Caption}
				</Typography>

				<Button variant="outlined" className={classes.carouselButton}>
					View Now
                </Button>
			</CardContent>
		</Grid>
	)


	for (let i = 0; i < mediaLength; i++) {
		const item = props.item.Items[i];

		const media = (
			<Grid item xs={12 / totalItems} key={item.Name}>
				<CardMedia
					className={classes.carouselItemMedia}
					image={item.Image}
					title={item.Name}
				>
					<Typography className={classes.mediaCaption}>
						{item.Name}
					</Typography>
				</CardMedia>

			</Grid>
		)

		items.push(media);
	}

	if (contentPosition === "left") {
		items.unshift(content);
	} else if (contentPosition === "right") {
		items.push(content);
	} else if (contentPosition === "middle") {
		items.splice(items.length / 2, 0, content);
	}

	return (
		<Card raised className={classes.Banner}>
			<Grid container spacing={0} className={classes.BannerGrid}>
				{items}
			</Grid>
		</Card>
	)
}

const Home = () => {
	const classes = useStyles()

	return (
		<div className={classes.homeWrapper}>
			<CssBaseline />

			<Carousel className={classes.carouselContainer}
				navButtonsAlwaysInvisible={true}
				indicators={false}
			>
				{_.map(items, (it, index) => {
					return <Item key={index} item={it} />
				})}
			</Carousel>

			<Grid container component="main">
				<Grid className={classes.imageGrid} item xs={6}></Grid>

				<Grid className={classes.gridTextContent} item xs={6} elevation={12} component={Paper}>
					<Typography component="h1" variant="h1">
						CINE ARE NOROC ARE
					</Typography>
					<Typography component="h1" variant="h1">
						Dar nu uita ca caruta nu e ca mertanu.
					</Typography>
				</Grid>
			</Grid>
		</div>
	)
}

export default Home