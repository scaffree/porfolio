import Layout from '../components/Layout'
import Link from 'next/link'

const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>La pagina que esta intentando acceder no existe.</p>
            <Link href="/">
                <a>Volver al Inicio</a>
            </Link>
        </div>
    </Layout>

)
export default custom404