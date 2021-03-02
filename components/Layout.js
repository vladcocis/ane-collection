import Head from 'next/head'
import FloatingActionButton from './FloatingActionButtons/FloatingActionButton'
import Footer from'../components/Footer'
import Navbar from '../components/Navbar/Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Cykaaaaa</title>
            </Head>

            <FloatingActionButton />

            <Navbar />

            <div className="main" style={{marginBottom: '30px'}}>
                {children}
            </div>
            
            <Footer/>
        </>
    )
}

export default Layout