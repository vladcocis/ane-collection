import executeQuery from '../../../lib/db'
const stripe = require('stripe')('sk_test_51HLFOaDfku0lGfVqZpmhcnUhCzlZC4QhE6N3CtlQD9FHQal15vEypkgC0nD5uVco14jwTfMcFxiE1zWLRiwP5ctx003d05yPwf');

export default async (req, res) => {
    if (req.method === 'GET') {
        return res.status(403).json({ status: 403, payload: 'err_forbidden' })
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
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
            ],
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