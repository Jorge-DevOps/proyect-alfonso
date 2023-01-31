

import { About, Link, PosHeader, Title } from "../../common"
import bgBlanco from "../../assets/imgs/home/background/bg-formas.svg"
import bgParallax from "../../assets/imgs/services/bg-parallax1.png"

import "./style.sass"

export const WorkAreas = () => {
    return (
        <>
            <PosHeader title="Conoce nuestras áreas de servicio" subTitle="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." image={bgParallax} modifier="WorkAreas" />

            <section className="Container Container__WorkAreas" style={{
                backgroundImage: `url(${bgBlanco})`
            }}>

                <About text={"Conoce nuestras"} center />
                <Title text="Conoce sobre" modifier="PosHeader_title" />
                <Title text="Javier Alfonso Abogados" modifier="PosHeader_subtitle" />

            </section>
        </>
    )
}