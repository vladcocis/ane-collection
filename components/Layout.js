import Head from 'next/head'
import Header from '../components/Header'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Cykaaaaa</title>
            </Head>
            
            <Header>
                {children}
            </Header>
        </>
    )
}

export default Layout