import Link from "next/link";
import Layout from "../components/Layout"
import { skills, experience, projects } from '../profile'

const Index = () => (

    <Layout>
        <header className="row">
            <div className="col-md-12 py-2">
                <div className="card car-body p-4">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/cara2.png" alt="" className="img-fluid" />

                        </div>
                        <div className="col-md-8">
                            <h1>Sebastian Caffree</h1>
                            <h3 className="text-primary">FrontEnd Developer</h3>
                            <p>
                                Me desempeño en el área informática, actualmente junto con un equipo de trabajo llevamos adelante un proyecto desarrollado en Next.js. Cuento con experiencia en Soporte Técnico a Usuarios y Desarrollo Front-End .
                                <br />
                                <br />
                                Tengo interés en seguir aprendiendo mas a fondo las tecnologías referentes al desarrollo web ya que es algo que encuentro interesante y disfruto de hacer.                            </p>
                            <div className="col-md-3">
                                <a href="https://www.linkedin.com/in/sebasti%C3%A1n-caffree-8971a8176/" target="_blank" className="btn border border-primary rounded d-flex align-items-center">
                                    <img src="./linkedin.png" width={30} height={30} alt="linkedIn Sebastian" />
                                    <p className="m-0 text-primary text-center w-100">Contactame</p>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
        <div className="row py-2">

            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1 className="text-primary">Habilidades</h1>
                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar bg-dark"
                                            role="progressbar"
                                            style={{ width: `${percentage}%` }}>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1 className="text-primary">Experiencia</h1>
                        <ul>

                            {
                                experience.map(({ workplace, from, to, desc, tasks }, i) =>
                                    <li key={i}>
                                        <h3>{workplace}</h3>
                                        <h5>{from}-{to} </h5>
                                        <p className="bg-primary rounded text-light p-1"><i>{desc} </i></p>
                                        <ul>

                                            {
                                                tasks.map((task, i) =>
                                                    <li key={i}>
                                                        <p>
                                                            {task}
                                                        </p>
                                                    </li>
                                                )
                                            }
                                        </ul>






                                    </li>
                                )
                            }
                        </ul>
                        {/*  <Link href="/experiences">
                            <a className="btn btn-light"> Saber Más</a>
                        </Link> */}
                    </div>
                </div>
            </div>

        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map(({ title, desc, img, src }, i) => (

                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${img}`} alt="" className="card-img-top"></img>
                                        </div>
                                        <div className="card-body">
                                            <h3>{title} </h3>
                                            <p>{desc} </p>
                                            <Link href={src}>
                                                <a className="btn btn-primary" target='_blank'>VER</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>
                </div>
            </div>
        </div>

    </Layout>
)

export default Index;