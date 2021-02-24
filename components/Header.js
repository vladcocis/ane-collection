import _ from 'lodash'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Menu from '@material-ui/core/Menu'
import { Grid, MenuItem } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'

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
}));

const Header = () => {
    return (
        
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