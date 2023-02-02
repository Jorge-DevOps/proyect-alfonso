import { Title, About, Link } from "../../../../common"
import { CardWorkArea } from "../../components"
import balance from "../../../../assets/imgs/home/balance.svg"
import parallax from "../../../../assets/imgs/home/bg-parallax.png"
import OwlCarousel from 'react-owl-carousel'
import "./style.sass"
import ReactOwlCarousel from "react-owl-carousel"

export const WorkAreas = () => {
    return (
        <section className="Container Container_WorkAreas" style={{
            background: `linear-gradient(to bottom, #13181eb8, #13181e), url(${parallax}) no-repeat center center fixed`
        }}>
            <div className="Container_WorkAreas--text">
                <About text={"Quiénes somos"} center modifier="workAreas" />
                <Title text="Áreas de Práctica" modifier="workAreas" />
            </div>
            {window.innerWidth > 768 ? (
                <div className="Container_WorkAreas--cards">
                    <div data-aos="flip-left" data-aos-duration="1500">
                        <CardWorkArea link="/derecho-penal" title="Derecho Penal" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500">
                        <CardWorkArea link="/derecho-civil" title="Derecho Administrativo, Disciplinario y Contratación Estatal" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500">
                        <CardWorkArea link="/derecho-administrativo" title="Fuerza Pública, Derechos Humanos y D.I.H." description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500">
                        <CardWorkArea link="/derecho-laboral" title="compliance y prevención de lavado de activos" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500">
                        <CardWorkArea link="/compliance" title="Derecho Civil y Comercial" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500">
                        <CardWorkArea link="/fuerza-publica" title="Derecho Laboral" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                    </div>
                </div>) : (
                <div className="Container_WorkAreas--cards">
                    <OwlCarousel items={1}
                        className="owl-theme"
                        loop
                        nav
                        autoPlay

                        margin={8} >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <CardWorkArea link="/derecho-penal" title="Derecho Penal" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                            <CardWorkArea link="/derecho-civil" title="Derecho Administrativo, Disciplinario y Contratación Estatal" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />

                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <CardWorkArea link="/derecho-administrativo" title="Fuerza Pública, Derechos Humanos y D.I.H." description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                            <CardWorkArea link="/derecho-laboral" title="compliance y prevención de lavado de activos" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />

                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <CardWorkArea link="/compliance" title="Derecho Civil y Comercial" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                            <CardWorkArea link="/fuerza-publica" title="Derecho Laboral" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                        </div>
                    </OwlCarousel>
                </div>
            )}
            <section className="Container_WorkAreas--more">
                <div className="Container_WorkAreas--moreText">
                    <p className="Container_WorkAreas--moreTexto text">
                        Te invitamos a que conozcas mas en profundidad todo sobre los servicios que ofrecemos
                    </p>
                </div>
                <div className="Container_WorkAreas--moreCta">
                    <Link text="Ver todos los servicios" link="/areas-de-practica" modifier="buttonWithouColor " />

                </div>
            </section>
        </section>
    )
}