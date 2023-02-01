import { Title, About, Link } from "../../../common"
import { Social } from "../social"
import palacio from "../../../assets/imgs/icons/home/casa.svg"

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
            flexDirection: `${reverse ? "row-reverse" : "row"}`

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
                <div
                >
                    <About text={subtitle} />
                    <div>
                        <Title text={title} />
                    </div>
                    <div className="Container_generalCard--content">
                        <p className="Container_generalCard--text">
                            {text}
                        </p>

                        <Link text="Quiero más información" link="/areas-de-practica" modifier="buttonWithouColorBlack " />
                        {type === "about" &&
                            <div>
                                <img src={palacio} alt="" />
                                <p>Iustitia est constants et perpetua voluntas ius suum cuique tribuere - La justicia es la constante y perpetua voluntad de dar a cada uno lo suyo. Domicio Ulpiano</p>
                            </div>}
                        
                        <Social />
                    </div>
                </div>
            </div>

        </section>)
}
