import React from 'react'
import Fab from '@material-ui/core/Fab'
import PhoneIcon from '@material-ui/icons/Phone'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	fabColor2: {
		position: 'flex',
		backgroundColor: '#f1d4ff',
		'&:hover': {
			backgroundColor: '#ecc4ff',
			filter: 'luminosity(115%)'
		}
	},
	fabColor1: {
		position: 'flex',
		'&:hover': {
			backgroundColor: '#fde8ff'
		}
	},
}))

export default function FloatingActionButtons() {
	const classes = useStyles()

	return (
		<div className='root'>
			<div className='icon__container'>
				<Fab className={classes.fabColor1} color="primary" aria-label="call" href="tel:+447470718754">
					<PhoneIcon />
				</Fab>
			</div>

			<div className='icon__container'>
				<Fab className={classes.fabColor2} aria-label="facebook" href="https://www.facebook.com/RoxxanaPop" target="_blank" rel='noopener noreferrer'>
					<FacebookIcon />
				</Fab>
			</div>
			<div className='icon__container'>
				<Fab className={classes.fabColor2} aria-label="instagram" href="https://www.instagram.com/roxanaaapop/" target="_blank" rel='noopener noreferrer'>
					<InstagramIcon />
				</Fab>
			</div>
		</div>
	);
}