import Head from 'next/head'
import Header from '../components/Header'
import FloatingActionButton from './FloatingActionButton';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Cykaaaaa</title>
            </Head>

            <FloatingActionButton />
            
            <Header>
                {children}
            </Header>
        </>
    )
}

export default Layout