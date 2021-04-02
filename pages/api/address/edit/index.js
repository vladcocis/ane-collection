import executeQuery from '../../../../lib/db'

export default async (req, res) => {
    
	const { id, user_address, address_id  } = req.body
    try {
    const response = await executeQuery({
		query: `UPDATE user_addresses SET address ='${user_address}' WHERE user_id='${id}' AND id='${address_id}'`
	})
    
		return res.status(200).json({ status: 200, payload: 'Address updated successfuly' })
	} catch (err) {
		console.error(err)
	}

	return res.status(500).json({ status: 500, message: 'Internal server error.' })
}