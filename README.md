This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
After you have navigated to the directory you wish to clone this project to, type the following git command in the command line:

```bash
git clone https://github.com/movo608/ane-collection.git
```

The next step is to install the dependencies present in package.json.

```bash
npx install --save
# or
npm install --save
```

Afterwards, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

There is an image upload component which requires a system path in order to work. It should be edited with an equivalent to your local system's filepath to ensure it works.

Edit the following line inside `pages/api/admin/image-upload.js`:
```code
// must be changed on every local device
const newPath = '/your/system/path/public/uploads/' + fileName
```

The database configuration is present inside `lib/db.js`, where one must fill in the following fields:

```code
config: {
        host: 'yourHost.com',
        port: 'port', //int
        database: 'database_name',
        user: 'username',
        password: 'password'
    }
```

The mailing system configuration is present inside `components/checkout/Mailing.js`, where one must fill in the following info:

```code
const info = await transporter.sendMail({
            from: 'your@email.com',
            to: 'to@someone.com',
            subject: 'Subject',
            text: 'Some lorem Ipsum!',
            attachments: [{
                path: `/local/path/to/attachments/${attachment}`
            }]
        })
```