import { Title, About, Link } from "../../../common"
import { Social } from "../social"
import palacio from "../../../assets/imgs/icons/home/casa.svg"
import toga from "../../../assets/imgs/icons/home/toga.svg"

import "./style.sass"

type generalCardProps = {
    bgFondo: string
    text: string
    title: string
    image: string
    reverse?: boolean
    subtitle: string
    type?: string
}

export const GeneralCard = ({ bgFondo, text, title, image, reverse, subtitle, type }: generalCardProps) => {

    return (
        <section className="Container Container_generalCard" style={{
            backgroundImage: `url(${bgFondo})`,
            flexDirection: `${window.innerWidth > 768 ? `${reverse ? "row-reverse" : "row"}` : "column"}`

        }}>

            <div className="Container_generalCard--one"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                style={{
                    backgroundImage: `url(${image})`
                }}
            >
            </div>

            <div
                data-aos={`${window.innerWidth > 768 ? `${reverse ? "fade-right" : "fade-left"}` : "fade-down"}`}
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="Container_generalCard--two"
            >
                <div className="Container_generalCard--two--content"
                >
                    <About text={subtitle} />
                    <div>
                        <Title text={title} />
                    </div>
                    <div className="Container_generalCard--content">
                        <p className="Container_generalCard--text text">
                            {text}
                        </p>

                        {type === "about" &&
                            <div className="Phrase_about">
                                <img src={palacio} alt="" className="Phrase_about-icon" />
                                <p className="text Phrase_about-text">Iustitia est constants et perpetua voluntas ius suum cuique tribuere - La justicia es la constante y perpetua voluntad de dar a cada uno lo suyo.  Domicio Ulpiano</p>
                            </div>}

                        {type === "why" &&
                            <ul className="Factors_why">
                                <div className="Factors_why--content">
                                    <img src={toga} alt="" className="Factors_why--img" />
                                    <p className="Factors_why--item textTitle ">Capacitación continua. </p>
                                </div>
                                <div className="Factors_why--content">
                                    <img src={toga} alt="" className="Factors_why--img" />
                                    <p className="Factors_why--item textTitle">Litigio Estratégico. </p>
                                </div>
                                <div className="Factors_why--content">
                                    <img src={toga} alt="" className="Factors_why--img" />
                                    <p className="Factors_why--item textTitle">Seriedad y Compromiso, demostrado en resultados. </p>
                                </div>

                            </ul>

                        }
                        {type === "about" && (
                            <>
                                <Social />
                                <Link text="Quiero más información" link="/areas-de-practica" modifier="buttonWithouColorBlack " />
                            </>
                        )
                        }

                    </div>
                </div>
            </div>

        </section>)
}
