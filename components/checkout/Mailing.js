const nodemailer = require('nodemailer')

export const sendMail = async (to, subject, text, attachment) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: '465',
        auth: {
            user: 'moldovanandrei8399@gmail.com',
            pass: 'arbevlrcpnmvqosn'
        }
    })

    try {
        const info = await transporter.sendMail({
            from: 'contact@ane-collection.com',
            to,
            subject,
            text,
            attachments: [{
                path: `/Xampp/htdocs/ane-collection/public/${attachment}`
            }]
        })

        console.log(`Message sent: ${info.messageId}`)
    } catch (err) {
        console.error(err)
    }
}