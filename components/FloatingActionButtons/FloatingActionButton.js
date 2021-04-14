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
	const [products, setProducts] = useState([])
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await axios.get(`/api/products`);

				if (response.status === 200) {
					setProducts(response.data.payload)
					setLoaded(true)
				}
			} catch (error) {
				console.error(error)
			}
		}

		fetchProducts()
	}, [])

	const totalCount = getProductsTotalCount(products, items)

	return loaded ? (
		<div className='root'>
			<div className='icon__container'>
				<i className={classes.cartCount}>{totalCount}</i>
				<Link href="/cart">
					<Button className={classes.shoppingCartButton}>
						<ShoppingCartIcon />
					</Button>
				</Link>
			</div>
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
	) : null;
}