import React, { useEffect, useState } from 'react'
import Fab from '@material-ui/core/Fab'
import PhoneIcon from '@material-ui/icons/Phone'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import { makeStyles } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

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
	shoppingCartButton: {
		position: 'flex',
		backgroundColor: 'gold',
		'&:hover': {
			backgroundColor: 'black',
			color: 'white'
		}
	}
}))

export default function FloatingActionButtons() {
	const classes = useStyles()

	return (
		<div className='root'>
			<div className='icon__container'>
				<Link href="/cart">
					<Button className={classes.shoppingCartButton}>
						<ShoppingCartIcon />
					</Button>
				</Link>
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