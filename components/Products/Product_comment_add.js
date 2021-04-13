import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container, Grid } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loader from '../../components/Loader'
import Row from '../../components/admin/Row'
import { TextField, TextareaAutosize, MenuItem } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Select from '@material-ui/core/Select';
import Slide from '@material-ui/core/Slide';



const useStyles = makeStyles((theme) => ({


	header: {
		marginLeft: '3rem',

	},

	comment_add: {
		marginLeft: '2rem',

	},

	textareaField: {
		width: '100%'
	},
	textFieldSmall: {
		width: '100%',
		margin: 0,
		padding: 0
	},
}));

const Product_comment_add = ({ productId_comment }) => {
	const classes = useStyles();


	const addComment = async event => {
		event.preventDefault()



		const res = await fetch('/api/products/comments/addcomment.js', {
			body: JSON.stringify({

				//  productId: productId_comment,
				username: event.target.username.value,
				comment: event.target.comment.value,
				rating: event.target.rating.value

			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		})

		const result = await res.json()
		// result.user => 'Ada Lovelace'
	}



	return (
		<List>
			<h3 className={classes.header}>New Comment</h3>

			<ListItem alignItems="flex-start" className={classes.comment_add}>
				<ListItemAvatar>
					<Avatar alt="" src="https://static.thenounproject.com/png/3016020-200.png" />
				</ListItemAvatar>
				<ListItemText>
						<Container >
							<form className={classes.form} onSubmit={addComment}>
								<Grid container spacing={7}>
									<Grid item xs={6}>
										<TextField
											variant="outlined"
											margin="normal"
											required
											fullWidth
											label="Username"
											name="username"
											id="username"
											autoFocus
										/>
									</Grid>
									<Grid item xs={6}>
										<Typography>Rating</Typography>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											fullWidth
											label="rating"
											name="rating"
											id="rating"
											defaultValue={2}
										>
											<MenuItem value={1}>1</MenuItem>
											<MenuItem value={2}>2</MenuItem>
											<MenuItem value={3}>3</MenuItem>
											<MenuItem value={4}>4</MenuItem>
											<MenuItem value={5}>5</MenuItem>
										</Select>
									</Grid>
									<Grid item xs={12}>
										<Typography>Enter your comment</Typography>
										<TextareaAutosize
											className={classes.textareaField}
											variant="outlined"
											margin="normal"
											required
											label="comment"
											name="comment"
											id="comment"
											autoFocus
											rows="6"
										/>
									</Grid>
									<Button
										type="submit"
										variant="contained"
										color="primary"
									>
										Add Comment
        							</Button>
								</Grid>
							</form>
						</Container>
				</ListItemText>
			</ListItem>
		</List>
	)
}

export default Product_comment_add;
