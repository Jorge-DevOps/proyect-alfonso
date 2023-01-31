
import { Link, PosHeader } from "../../common"
import bgBlanco from "../../assets/imgs/home/background/bg-formas.svg"
import bgParallax from "../../assets/imgs/services/bg-parallax.png"

import "./style.sass"
export const About_us = () => {
    return (
        <>
            <PosHeader title="¿Quiénes somos?" subTitle="Somos una firma de abogados especializada en derecho ....." image={bgParallax} />

            <section className="Container Container_AboutUs" style={{
                backgroundImage: `url(${bgBlanco})`
            }}>

                <div className="Container_AboutUs--one"
                    data-aos="fade-down"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                </div>

                <div
                    data-aos={`${window.innerWidth > 768 ? "fade-left" : "fade-down"}`}
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="Container_AboutUs--two"
                >
                    <div
                    >
                        <div className="Container_AboutUs--content">
                            <p className="Container_AboutUs--text">
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                                No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.
                            </p>
                            <   >
                                <div></div>
                                <div></div>
                                <div></div>
                            </>

                            <div>
                                <a></a>
                                <a></a>
                                <a></a>
                            </div>
                            <Link text="Quiero más información" link="/areas-de-practica" modifier="buttonWithouColorBlack " />

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}