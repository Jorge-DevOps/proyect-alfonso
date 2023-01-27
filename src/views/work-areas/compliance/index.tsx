import { About, Title, Link, PosHeader } from "../../../common"
import bgBlanco from "../../../assets/imgs/home/bacground/bg-formas.svg"
import banner2 from "../../../assets/imgs/home/home-section-2.png"

export const Compliance = () => {
    return (<>
        <PosHeader title="Compliance y prevención de compliance" subTitle="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." />

        <section className="Container Container_About" style={{
            backgroundImage: `url(${bgBlanco})`
        }}>

            <div className="Container_About--one" style={{
                backgroundImage: `url(${banner2})`
            }}
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
            </div>

            <div
                data-aos={`${window.innerWidth > 768 ? "fade-left" : "fade-down"}`}
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="Container_About--two"
            >
                <div
                >
                    <About text={"Quiénes somos"} />
                    <div>
                        <Title text="Conoce sobre" />
                        <Title text="Javier Alfonso Abogados" />
                    </div>
                    <div className="Container_About--content">
                        <p className="Container_About--text">
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
                        <Link text="Quiero más información" link="/areas-trabajo" modifier="buttonWithouColorBlack " />

                    </div>
                </div>
            </div>

        </section>
    </>)
}