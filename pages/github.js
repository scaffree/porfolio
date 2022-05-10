import Layout from "../components/Layout"

const Github = () => (
    <Layout>
        <div className="d-flex flex-column justify-content-center align-items-center ">

            <h1>Github</h1>
            <img width={100} height={100} src="./github.png" alt="github" />
            <a href="https://github.com/scaffree?tab=repositories" target='_blank' className="btn btn-dark mt-4">Ver MI PERFIL</a>
        </div>
    </Layout>
)

export default Github;