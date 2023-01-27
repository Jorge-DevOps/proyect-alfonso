import banner3 from "../../assets/imgs/home/home-section-3.png"
import bgBlanco from "../../assets/imgs/home/bacground/bg-formas.svg"
import { About, Title, Link } from "../../common"
import { Contact } from "./views/contact"
import { Partners } from "./views/partners"
import { WorkAreas } from "./views/workAreas"
import { Team } from "./views/team"
import { AboutSection } from "./views/about"
import "./style.sass"


export const Home = () => {

    return (
        <>
            <section className="Container Container_Banner">
                <div className="Container_Banner--text">
                    <p className="Container_Banner--title textTitle">Manejo de procesos, litigios y arbitrajes</p>
                    <p className="Container_Banner--subTitle text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto</p>
                </div>
                <div className="Container_Banner--href">
                    <Link text="Áreas de trabajo" link="/areas-trabajo" modifier="buttonWithouColorWhite" />
                    <Link text="Contáctenos" link="/contacto" modifier="buttonWithouColorWhite" />

                </div>
            </section>

            <AboutSection />
            <WorkAreas />

            <section className="Container Container_Why" style={{
                backgroundImage: `url(${bgBlanco})`
            }}>

                <div className="Container_Why--two"
                    data-aos={`${window.innerWidth > 768 ? "fade-right" : ""}`}
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <About text={"Por qué elegirnos"} />
                    <div>
                        <Title text="Somos una" />
                        <Title text="firma certificada" />
                        <div className="Container_About--content">
                            <p className="Container_About--text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
                            <div>
                            </div><div>
                            </div><div>
                            </div></div>
                    </div>
                    <div>
                        <a></a>
                        <a></a>
                        <a></a>
                    </div>
                </div>

                <div className="Container_Why--one" style={{
                    backgroundImage: `url(${banner3})`

                }}
                    data-aos={`${window.innerWidth > 768 ? "fade-down" : ""}`}
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >

                </div>

            </section>
            <section style={{
                backgroundImage: `url(${bgBlanco})`
            }}>
                <Team />
                <Partners />
                <Contact />
            </section>

        </>
    )
}