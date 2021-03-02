import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar/Navbar'
import FloatingActionButton from './FloatingActionButtons/FloatingActionButton'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Cykaaaaa</title>
            </Head>

            <FloatingActionButton />

            {/*<Header> */}
            {children}
            {/*</Header>*/}
        </>
    )
}

export default Layout