import executeQuery from '../../../lib/db'
import axios from 'axios'
import _ from 'lodash';

const stripe = require('stripe')('sk_test_51HLFOaDfku0lGfVqZpmhcnUhCzlZC4QhE6N3CtlQD9FHQal15vEypkgC0nD5uVco14jwTfMcFxiE1zWLRiwP5ctx003d05yPwf');

export default async (req, res) => {
    if (req.method === 'GET') {
        return res.status(403).json({ status: 403, payload: 'err_forbidden' })
    }

    console.log(req.body)

    const { name, email, phone, address1, address2, city, county, zip, payment } = req.body.state
    const { final_products } = req.body

    console.log(final_products)

    const alpha_object_data = []

    _.map(final_products, (it) => {
        alpha_object_data.push({
            price_data: {
                currency: 'ron',
                product_data: {
                    name: it.product_name,
                },
                unit_amount: it.product_price * 100
            },
            quantity: it.amount
        })
    })

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            /*line_items: [
                {
                    price_data: {
                        currency: 'ron',
                        product_data: {
                            name: 'Stubborn Attachments',
                            images: ['https://i.imgur.com/EHyR2nP.png'],
                        },
                        unit_amount: 2000,
                    },
                    quantity: 1,
                },
            ],*/
            line_items: alpha_object_data,
            mode: 'payment',
            success_url: `http://localhost:3000/cart/checkout`,
            cancel_url: `http://localhost:3000/cart/error`,
        })

        return res.status(200).json({ status: 200, payload: { id: session.id } })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: 500, payload: 'Internal server error.' })
    }

}