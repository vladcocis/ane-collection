import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button'
import { withStyles, makeStyles } from '@material-ui/styles'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useEffect, useState } from 'react';
import axios from 'axios'
import _ from 'lodash'
import { Grid, Input } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { TextField, TextareaAutosize, Container, MenuItem } from '@material-ui/core'
import React from 'react'

import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Link from 'next/link'
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    root: {
    },
    tableImage: {
        maxWidth: 100
    },
    tableDescription: {
        maxWidth: 400
    },
    textareaField: {
        width: '100%'
    },
    textFieldSmall: {
        width: '100%',
        margin: 0,
        padding: 0
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    pageContainer: {
        width: '100%'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    input: {
        display: 'none'
    },
    popoupImageContainer: {
        display: 'flex',
        marginTop: theme.spacing(5),
        '& img': {
            width: 200,
            height: 'auto'
        }
    },
    deleteImage: {
        position: 'absolute',
        zIndex: 100000000000000000,
        background: '#fff',
        borderRadius: 0
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Row = ({ details }) => {
    const classes = useStyles()
    const [images, setImages] = useState([])
    const [loaded, setLoaded] = useState(false)

    const [edit, setEdit] = useState(false)

    useEffect(() => {
        async function fetchProductImages() {
            try {
                const response = await axios.get(`/api/products/images/${details.product_id}`)

                if (response.status === 200 && response.data.status === 200) {
                    setImages(response.data.payload)
                    setLoaded(true)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchProductImages()
    }, [])

    const handleDeleteClick = (e, id) => {
        console.log(id)
    }

    const handleImageDeleteClick = async (e, id) => {
        e.preventDefault()

        console.log(id)
        try {
            const response = await 
        } catch (error) {
            console.error(error)
        }
    }

    const handleEditClick = (e, id) => {
        setEdit(true)
    }

    const handleEditConfirm = () => {
        setEdit(false)
    }

    const handleClose = () => {
        setEdit(false)
    }

    const displayImages = () => {
        return _.map(images, (it, index) => {
            return (
                <Grid item xs={3} key={index}>
                    <img className={classes.tableImage} src={it.img} />
                </Grid>
            )
        })
    }

    return (
        <StyledTableRow key={details.product_id}>
            <StyledTableCell align="center">{details.product_name}</StyledTableCell>
            <StyledTableCell align="center">{details.category_name}</StyledTableCell>
            <StyledTableCell className={classes.tableDescription} align="center">{details.product_desc}</StyledTableCell>
            <StyledTableCell align="center">{details.product_price}</StyledTableCell>
            <StyledTableCell align="center">{details.stock}</StyledTableCell>

            <StyledTableCell>
                {images.length && loaded ? <Grid container>{displayImages()}</Grid> : 'Loading...'}
            </StyledTableCell>

            <StyledTableCell>
                {edit ? <Button onClick={(e, id) => handleEditConfirm(e, details.product_id)}><DoneIcon /></Button> : <Button onClick={(e, id) => handleEditClick(e, details.product_id)}><CreateIcon /></Button>}
                <Button onClick={(e, id) => handleDeleteClick(e, details.product_id)}><DeleteIcon /></Button>
            </StyledTableCell>

            <Dialog fullScreen open={edit} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Edit {details.product_name}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleEditConfirm}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <Container>
                    <form className={classes.form}>
                        <Grid container spacing={7}>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Product"
                                    name="product_name"
                                    autoFocus
                                    defaultValue={details.product_name}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Category</Typography>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    defaultValue={details.category_id}
                                    fullWidth
                                    label="Category"
                                >
                                    <MenuItem value={1}>Handmade</MenuItem>
                                    <MenuItem value={2}>Manufactured</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Description</Typography>
                                <TextareaAutosize
                                    className={classes.textareaField}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    label="Description"
                                    name="product_desc"
                                    autoFocus
                                    rows="6"
                                    defaultValue={details.product_desc}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Price"
                                    name="product_price"
                                    autoFocus
                                    defaultValue={details.product_price}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Stock"
                                    name="stock"
                                    autoFocus
                                    defaultValue={details.stock}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload Images
                                    </Button>
                                </label>

                                <Grid className={classes.popoupImageContainer} container spacing={10}>
                                    {_.map(images, (it) => {
                                        return (
                                            <Grid item key={it.image_id}>
                                                <Button onClick={(e, image_id) => handleImageDeleteClick(e, it.image_id)} variant="contained" className={classes.deleteImage}>x</Button>
                                                <img src={it.img} />
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Dialog>
        </StyledTableRow>
    )
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        border: '1px solid rgba(153, 153, 153, .4)',
    },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export default Row