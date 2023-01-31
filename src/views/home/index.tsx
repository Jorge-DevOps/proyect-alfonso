import bgBlanco from "../../assets/imgs/home/background/bg-formas.svg"
import { Link } from "../../common"
import { AboutSection, Contact, Partners, Team, Why, WorkAreas } from "./views"
import bg1 from "../../assets/imgs/home/teamWithBaground.png"
import bg2 from "../../assets/imgs/home/TeamWitouhBaground.png"
import "./style.sass"


export const Home = () => {

    return (
        <>
            <section className="Container Container_Banner" 
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="100"
                data-aos-offset="0"
            >
                <div className="Container_Banner--text">
                    <p className="Container_Banner--title textTitle">Manejo de procesos, litigios y arbitrajes</p>
                    <p className="Container_Banner--subTitle text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto</p>
                </div>
                <div className="Container_Banner--href">
                    <Link text="Áreas de Práctica" link="/areas-de-practica" modifier="buttonWithouColorWhite" />
                    <Link text="Contáctenos" link="/contacto" modifier="buttonWithouColorWhite" />

                </div>
                <div className="Container_Banner--transparent"></div>
            </section>

            <AboutSection />
            <WorkAreas />
            <Why />

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