import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../components/cart/CartProvider'
import _ from 'lodash'
import CartTotal from '../../components/cart/CartTotal'
import Loader from '../../components/Loader'
import Checkout from '../../components/cart/Checkout'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

const TAX_RATE = 0.07;

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    TableContainer: {
        marginBottom: '4rem'
    }
});

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const CartPage = () => {
    const { state: items } = useContext(CartContext)
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    let totalPrice = 0
    const findProduct = (id) => products.find((p) => p.id === id)

    const classes = useStyles();

    useEffect(() => {
        async function fetchProducts() {
            const response = await axios.get(`/api/cart/get-all-products`)

            if (response.status === 200) {
                setProducts(response.data.payload)
                setLoaded(true)
            }
        }

        fetchProducts()
    }, [])

    return loaded ? (
        <div style={{ padding: '5rem' }}>
            <h1>Cart ITEMS</h1>

            <TableContainer component={Paper} className={classes.TableContainer}>
                <Table className={classes.table} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                Details
                            </TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">RON</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {_.map(items, ({ id, amount }) => {
                            const product = findProduct(id)
                            let finalPrice = amount * product.product_price
                            totalPrice += parseInt(finalPrice)

                            return (
                                <TableRow key={id}>
                                    <TableCell>{product.product_name}</TableCell>
                                    <TableCell align="right">{amount}</TableCell>
                                    <TableCell align="right">{product.product_price}</TableCell>
                                    <TableCell align="right">{finalPrice}</TableCell>
                                </TableRow>
                            )
                        })}

                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell align="right">{ccyFormat(totalPrice)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Link href="/cart/checkout">
                <Button variant="contained">Checkout</Button>
            </Link>
        </div>
    ) : <Loader />
}

export default CartPage