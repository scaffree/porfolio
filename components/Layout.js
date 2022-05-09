import Navbar from './Navbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const cambiosDeRuta = url => console.log(url);

        router.events.on('routeChangeStart', cambiosDeRuta)

        return () => {
            router.events.off('routeChangeStart', cambiosDeRuta)
        }
    }, []);
    return (
        <>
            <Navbar />
            <main className='container py-4 border'>
                {children}
            </main>
            <footer className='bg-dark text-light'>
                <div className="container p-4">
                    <h1>&copy; Sebastian Caffree Portafolio</h1>
                    <p>2019-{new Date().getFullYear()} </p>
                    <p>All Right Reserved</p>
                </div>
            </footer>

        </>

    )
}

export default Layout;