import react from 'react'
import Head from 'next/head'
const Layout = ({children}) => {
    return (
        <>
        <Head> 
            <title>Ane Collections</title>
        </Head>
        <style jsx global>
            {`
            *,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			body {
				margin: 0;
				color: #333;
				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
				'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
				'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
			}

			.container {
				margin: 1rem auto;
				padding-left: 1rem;
				padding-right: 1rem;
			}
            `}
        </style>
        <main>
            <div className="container">{children}</div>
        </main>
        </>
    )
}

export default Layout

Layout.proptypes = {
    children: Proptypes.node,
}