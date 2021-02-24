import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import _ from 'lodash'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import BrushIcon from '@material-ui/icons/Brush'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import PhoneIcon from '@material-ui/icons/Phone'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useRouter } from 'next/router'

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        backgroundColor: '#faf0f2'
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        },
        backgroundColor: '#faf0f2'
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    navList: {
        marginLeft: theme.spacing(1)
    },
    iconFill_black: {
        fill: '#000'
    }
}));

const navLinks = [
    { label: 'Home', url: '/', icon: <HomeIcon style={{ fill: '#000' }} />, isSecured: false },
    { label: 'About', url: '/about', icon: <InfoIcon style={{ fill: '#000' }} />, isSecured: false },
    { label: 'Handmade', url: '/handmade', icon: <BrushIcon style={{ fill: '#000' }} />, isSecured: false },
    { label: 'Manufactured', url: '/manufactured', icon: <BusinessCenterIcon style={{ fill: '#000' }} />, isSecured: false },
    { label: 'Contact', url: '/contact', icon: <PhoneIcon style={{ fill: '#000' }} />, isSecured: false },
    { label: 'Admin', url: '/admin', icon: <SettingsApplicationsIcon style={{ fill: '#000' }} />, isSecured: true, requiresAdmin: true },
    { label: 'Account', url: '/account', icon: <AccountCircleIcon style={{ fill: '#000' }} />, isSecured: true },
]

const NavLinks = ({ navLinks }) => {
    const router = useRouter()

    return _.map(navLinks, ({ label, url, icon, isSecured, requiresAdmin }) => {
        if (!isSecured) {
            return (
                <ListItem button key={label} onClick={() => {
                    router.replace(url)
                }}>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={label} />
                </ListItem>
            )
        }
    })
}

const RestrictedLinks = ({ navLinks }) => {
    const router = useRouter()

    return _.map(navLinks, ({ label, url, icon, isSecured, requiresAdmin }) => {
        if (isSecured) {
            return (
                <ListItem button key={label} onClick={() => {
                    router.replace(url)
                }}>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={label} />
                </ListItem>
            )
        }
    })
}

const Header = ({ children }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Ane Collections
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                    })
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon style={{ fill: '#000' }} />
                        ) : (
                            <ChevronLeftIcon style={{ fill: '#000' }} />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.navList}>
                    <NavLinks navLinks={navLinks} />
                </List>
                <Divider />
                <List className={classes.navList}>
                    <RestrictedLinks navLinks={navLinks} />
                </List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}

export default Header