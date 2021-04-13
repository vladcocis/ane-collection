import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import _ from "lodash";
import useUser from "../../lib/useUser"
import { useRouter } from 'next/router'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loader from '../../components/Loader'
import Row from '../../components/admin/Row'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        border: '1px solid rgba(153, 153, 153, .4)'
    },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 700,
        overflow: 'hidden'
    },
    TableContainer: {
        marginTop: theme.spacing(10)
    }
}));

const AdminIndex = () => {
    const router = useRouter()
    const classes = useStyles()
    let { user } = useUser({ redirectTo: "/account" });
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchAppointments() {
            const response = await axios.get(`/api/admin/get-all-products`);

            setProducts(response.data.payload);
        }

        fetchAppointments();
    }, []);

    if (!user) {
        return <div style={{ marginTop: '20em' }}>LOADING</div>
    }

    if (user && !user.isAdmin) {
        return <div style={{ marginTop: '20em' }}>You are not admin</div>
    }

    const renderItems = () => {
        return _.map(products, (it, index) => {
            return (
                <Row handleRowDelete={handleRowDelete} key={index} details={it} />
            )
        })
    }

    const handleRowDelete = async (e, id) => {
        e.preventDefault()

        try {
            const response = await axios.post(`/api/admin/delete-product`, { id })

            if (response.status === 200 && response.data.status === 200) {
                router.reload()
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <TableContainer className={classes.TableContainer} component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Product</StyledTableCell>
                        <StyledTableCell align="center">Category</StyledTableCell>
                        <StyledTableCell align="center">Description</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        <StyledTableCell align="center">Stock</StyledTableCell>
                        <StyledTableCell align="center">Gallery</StyledTableCell>
                        <StyledTableCell>Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products ? renderItems() : <Loader />}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default AdminIndex;