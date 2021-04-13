import React from 'react'
import Final from '../../components/cart/stepper'
import { CssBaseline, Button } from '@material-ui/core'
import Link from 'next/link'

const Checkout = () => (
    <React.Fragment>
        <Link href="/cart">
            <Button variant="contained">Return to Cart</Button>
        </Link>

        <Final />
    </React.Fragment>
)

export default Checkout