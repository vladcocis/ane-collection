import executeQuery from '../../../lib/db'
import { hash, genSalt } from 'bcrypt'

export default async (req, res) => {
    if (req.method === 'GET') {
        return res.status(403).json({ status: 403, payload: 'err_forbidden' })
    }

    const { firstName, lastName, email, password } = req.body

    console.log(firstName, lastName, email, password)

    const email_challenge = await executeQuery({
        query: `SELECT email FROM user WHERE email='${email}'`
    })

    if (email_challenge.length) {
        return res.status(200).json({ status: 409, payload: 'err_email_exists' })
    }

    genSalt(12, function(err, salt) {
        if (!err) {
            hash(password, salt, async function(err, hash) {
                if (!err) {
                    const response = await executeQuery({
                        query: `INSERT INTO user (id, name, username, email, password, is_admin) VALUES (null, '${firstName} ${lastName}', 'null', '${email}', '${hash}', '0')`
                    })

                    console.log(response)

                    if (response.error) {
                        return res.status(500).json({status: 500, payload: 'err_cannot_create_user'})
                    }
                }
            })
        }
    })

    return res.status(200).json({ payload: 'User created successfully', status: 200 })
}