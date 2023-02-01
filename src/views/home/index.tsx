import bgBlanco from "../../assets/imgs/home/background/bg-formas.svg"
import { GeneralCard, Link } from "../../common"
import { Contact, Partners, Team, WorkAreas } from "./views"
import bg1 from "../../assets/imgs/home/teamWithBaground.png"
import bg2 from "../../assets/imgs/home/TeamWitouhBaground.png"
import "./style.sass"
import data from '../../services/home.json';


export const Home = () => {

    return (
        <>
            {
                Object.keys(data).length > 0 && (
                    <>
                        <section className="Container Container_Banner" style={{
                            backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Home%2Fbanner-desk.jpg?alt=media&token=b1c99e73-117a-46d1-a108-b8439d886d46)"
                        }}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0"
                        >
                            <div className="Container_Banner--text">
                                <p className="Container_Banner--title textTitle">Asistencia Jurídica Especializada</p>
                                <p className="Container_Banner--subTitle text">Litigio Estratégico</p>
                            </div>
                            <div className="Container_Banner--href">
                                <Link text="Áreas de Práctica" link="/areas-de-practica" modifier="buttonWithouColorWhite" />
                                <Link text="Contáctenos" link="/contacto" modifier="buttonWithouColorWhite" />

                            </div>
                            <div className="Container_Banner--transparent"></div>
                        </section>
                        <section className="Container Container_Banner" style={{
                            backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Home%2Fbanner-deskv2.png?alt=media&token=6821a85a-d45d-4773-8392-36162a6709c0)"
                        }}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0"
                        >
                            <div className="Container_Banner--text">
                                <p className="Container_Banner--title textTitle">Asistencia Jurídica Especializada</p>
                                <p className="Container_Banner--subTitle text">Litigio Estratégico</p>
                            </div>
                            <div className="Container_Banner--href">
                                <Link text="Áreas de Práctica" link="/areas-de-practica" modifier="buttonWithouColorWhite" />
                                <Link text="Contáctenos" link="/contacto" modifier="buttonWithouColorWhite" />

                            </div>
                            <div className="Container_Banner--transparent"></div>
                        </section>
                        <GeneralCard title={data.home.about.title} image={data.home.about.image} bgFondo={bgBlanco} text={data.home.about.text} subtitle={data.home.about.subtitle} type={data.home.about.type} />
                        <WorkAreas />
                        <GeneralCard title={data.home.why.title} image={data.home.why.image} bgFondo={bgBlanco} text={data.home.why.text} subtitle={data.home.why.subtitle} reverse />

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
        </>
    )
}