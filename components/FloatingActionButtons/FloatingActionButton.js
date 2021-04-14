import React, { useEffect, useState } from 'react'
import Fab from '@material-ui/core/Fab'
import PhoneIcon from '@material-ui/icons/Phone'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import { makeStyles } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { CartContext } from '../cart/CartProvider'
import { getProductsTotalCount } from '../cart/CartProvider'
import axios from 'axios'

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
		},
		zIndex: 10
	},
	cartCount: {
		position: 'absolute',
		top: -8,
		right: 10,
		backgroundColor: '#000',
		color: '#fff',
		padding: '4px 10px',
		zIndex: 12,
		fontSize: 17,
		borderRadius: 60
	}
}))

export default function FloatingActionButtons() {
	const classes = useStyles()
	const { state: items } = React.useContext(CartContext)
	let totalCount = getProductsTotalCount(items)

	console.log(totalCount)
	console.log(items)

	if (!totalCount) {
		totalCount = 0
	}

	return (
		<div className='root'>
			<div className='icon__container'>
				<span className={classes.cartCount}>{totalCount}</span>
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
	)
}