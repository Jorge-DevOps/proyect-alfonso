

import { About, Link, PosHeader, Title } from "../../common"
import bgBlanco from "../../assets/imgs/home/background/bg-formas.svg"
import bgParallax from "../../assets/imgs/services/bg-parallax1.png"
import data from '../../services/workAreas.json';
import "./style.sass"

export const WorkAreas = () => {
    return (
        <>
            <PosHeader title="Conoce nuestras áreas de servicio" subTitle="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." image={bgParallax} modifier="WorkAreas" />

            <section className="Container Container__WorkAreas" style={{
                backgroundImage: `url(${bgBlanco})`
            }}>
                <About text={"Conoce nuestras"} center />
                <Title text="Conoce nuestras áreas de práctica" />
                <section className="WorkArea">

                    {
                        data.workAreas.areas.map((item, index) => {
                            return (
                                <div className="WorkArea_Container">
                                    <img className="WorkArea_img" src={item.icon} alt="" />
                                        <p className="WorkArea_Name textTitle"   >{item.title}</p>
                                        <p className="WorkArea_Resume text">   {item.resume}</p>
                                </div>
                            )
                        })
                    }
                </section>
            </section>
        </>
    )
}