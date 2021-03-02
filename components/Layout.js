import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar/Navbar'
import FloatingActionButton from './FloatingActionButtons/FloatingActionButton'
import Footer from'../components/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Cykaaaaa</title>
            </Head>

            <FloatingActionButton />

            <Navbar />

            <div className="main">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout