import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Menu from '@material-ui/core/Menu'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { Grid, List, ListItem, ListItemText, MenuItem } from '@material-ui/core'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import { Menu as MenuIcon } from '@material-ui/icons'
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'
import EventIcon from '@material-ui/icons/Event'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import Link from 'next/link'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import GroupAddIcon from '@material-ui/icons/GroupAdd'

const labels = 'home, about, handmade, manufactured, contact, admin, account'

const navLinks = [
    { label: 'Home', url: '/', isSecured: false },
    { label: 'About', url: '/about', isSecured: false },
    { label: 'Handmade', url: '/handmade', isSecured: false },
    { label: 'Manufactured', url: '/manufactured', isSecured: false },
    { label: 'Contact', url: '/contact', isSecured: false },
    { label: 'Admin', url: '/admin', isSecured: true, requiresAdmin: true },
    { label: 'Account', url: '/account', isSecured: true },
]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    menu: {
        marginTop: 40,
        float: 'right'
    },
    cardRoot: {
        padding: '15px 15px',
        maxWidth: 345,
        width: '100%'
    },
    cardMedia: {
        height: 300
    },
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    list: {
        width: 250
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`
    },
    notificationsList: {
        width: 500,
        backgroundColor: theme.palette.background.paper,
    },
    notificationsMenu: {
        marginTop: 50,
        float: 'right',
        width: '800px !important'
    },
    notificationsTitle: {
        marginLeft: 30,
        marginTop: 10,
    }
}));

const Header = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
	const [anchorElNotifications, setAnchorElNotifications] = useState(null)
    const openNotifications = Boolean(anchorElNotifications)

    const handleMenu = (e) => {
		setAnchorEl(e.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleNotificationsMenu = (e) => {
		setAnchorElNotifications(e.currentTarget)
	}

	const handleCloseNotificationsMenu = () => {
		setAnchorElNotifications(null)
	}

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid justify="space-between" container spacing={24}>
                    <Menu
                        className={classes.notificationsMenu}
                        id="menu-notifications"
                        anchorEl={anchorElNotifications}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={openNotifications}
                        onClose={handleCloseNotificationsMenu}
                    >
                        <Typography disabled variant="h5" component="h2" className={classes.notificationsTitle}>
                            Notifications <NotificationsIcon />
                        </Typography>

                        <MenuItem
                            style={{ backgroundColor: 'transparent' }}
                        >
                            <List className={classes.notificationsList}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <BeachAccessIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={"Secondary Text"}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </List>
                        </MenuItem>
                    </Menu>

                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                    AVATAR
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

const NavLinks = ({ navLinks }) => {
    return _.map(navLinks, ({ label, url, isSecured, requiresAdmin }) => {
        return (
            <li>{label}</li>
        )
    })
}

export default Header