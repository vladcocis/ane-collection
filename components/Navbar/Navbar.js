import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	Button,
	IconButton,
	Drawer,
	Link,
	MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from 'next/link'

import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import BrushIcon from '@material-ui/icons/Brush'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import PhoneIcon from '@material-ui/icons/Phone'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CloseIcon from '@material-ui/icons/Close'

import Divider from '@material-ui/core/Divider'

const navLinks = [
	{ label: 'Home', url: '/', icon: <HomeIcon style={{ fill: '#000' }} />, isSecured: false },
	{ label: 'About', url: '/about', icon: <InfoIcon style={{ fill: '#000' }} />, isSecured: false },
	{ label: 'Handmade', url: '/handmade', icon: <BrushIcon style={{ fill: '#000' }} />, isSecured: false },
	{ label: 'Manufactured', url: '/manufactured', icon: <BusinessCenterIcon style={{ fill: '#000' }} />, isSecured: false },
	{ label: 'Contact', url: '/contact', icon: <PhoneIcon style={{ fill: '#000' }} />, isSecured: false },
	{ label: 'Admin', url: '/admin', icon: <SettingsApplicationsIcon style={{ fill: '#000' }} />, isSecured: true, requiresAdmin: true },
	{ label: 'Account', url: '/account', icon: <AccountCircleIcon style={{ fill: '#000' }} />, isSecured: true },
]

const useStyles = makeStyles((theme) => ({
	header: {
		backgroundColor: theme.palette.primary,
		paddingRight: "79px",
		paddingLeft: "118px",
		"@media (max-width: 1300px)": {
			paddingLeft: 0,
		},
	},
	logo: {
		fontFamily: "Work Sans, sans-serif",
		fontWeight: 600,
		color: "#000",
		textAlign: "left",
	},
	menuButton: {
		fontFamily: "Open Sans, sans-serif",
		fontWeight: 700,
		size: "18px",
		marginLeft: "38px",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	drawerContainer: {
		padding: "20px 30px",
	},
	drawerLinks: {
		padding: theme.spacing(1)
	},
	closeIcon: {
		cursor: 'pointer',
		borderRadius: 10,

		'&:hover': {
			backgroundColor: 'lightpink',
			transition: '300ms',
		}
	}
}));

export default function Header() {
	const { header, logo, menuButton, toolbar, drawerContainer, drawerLinks, closeIcon } = useStyles();

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 1257
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};

		setResponsiveness();

		window.addEventListener("resize", () => setResponsiveness());
	}, []);

	const displayDesktop = () => {
		return (
			<Toolbar className={toolbar}>
				{Logo}
				<div>{getMenuButtons()}</div>
			</Toolbar>
		);
	};

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));

		return (
			<Toolbar>
				<IconButton
					{...{
						edge: "start",
						color: "inherit",
						"aria-label": "menu",
						"aria-haspopup": "true",
						onClick: handleDrawerOpen,
					}}
				>
					<MenuIcon />
				</IconButton>

				<Drawer
					{...{
						anchor: "left",
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}
				>
					<div className={drawerContainer}>
						<CloseIcon className={closeIcon} onClick={handleDrawerClose} />
						{getDrawerChoices()}
					</div>
				</Drawer>

				<div>{Logo}</div>
			</Toolbar>
		);
	};

	const getDrawerChoices = () => {
		return navLinks.map(({ label, url, icon }) => {
			return (
				<div className={drawerLinks} key={label}>
					<Link
						{...{
							component: RouterLink,
							href: url,
							color: "inherit",
							style: { textDecoration: "none" },
						}}
					>
						<MenuItem>{icon} {label}</MenuItem>
					</Link>

					<Divider />
				</div>
			);
		});
	};

	const Logo = (
		<Typography variant="h6" component="h1" className={logo}>
			Ane Collections
		</Typography>
	);

	const getMenuButtons = () => {
		return navLinks.map(({ label, url }) => {
			return (
				<Button
					{...{
						key: label,
						color: "inherit",
						href: url,
						component: RouterLink,
						className: menuButton,
					}}
				>
					{label}
				</Button>
			);
		});
	};

	return (
		<header>
			<AppBar className={header}>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	);
}