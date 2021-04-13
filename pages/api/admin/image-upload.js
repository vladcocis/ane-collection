import formidable from 'formidable'
import mv from 'mv'
import executeQuery from '../../../lib/db'
import withSession from '../../../lib/session'

export const config = {
    api: {
        bodyParser: false
    }
}

export default withSession(async (req, res) => {
    const form = new formidable.IncomingForm()

    const currentUser = req.session.get('user')

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(500).json({ status: 500, message: 'Internal server error. Please try again.' })
        }

        if (!currentUser.isAdmin) {
            return res.status(403).json({ status: 403, message: 'Data transaction forbidden.' })
        }

        const oldPath = files.selectedFile.path
        const fileName = new Date().getTime() + files.selectedFile.name

        // must be changed on every device
        const newPath = 'D:/Uni Work/Team Project/ane-collection/public/uploads/' + fileName

        mv(oldPath, newPath, { mkdirp: true }, async (err) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ status: 500, message: err })
            }

            try {
                const result = await executeQuery({
                    query: `INSERT INTO product_images (id, product_id, img) VALUES (null, '${fields.product_id}', '${fileName}')`
                })

                if (result.error) {
                    console.error(result.error)
                    return res.status(500).json({ status: 500, message: 'Data transaction error.' })
                }
            } catch (error) {
                console.error(error)
                return res.status(500).json({ status: 500, message: 'Data transaction error.' })
            }

            return res.status(200).json({ status: 200, message: 'Image uploaded successfully.' })
        })
    })
})