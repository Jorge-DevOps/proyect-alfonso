import banner3 from "../../../../assets/imgs/home/home-section-3.png"
import bgBlanco from "../../../../assets/imgs/home/background/bg-formas.svg"
import { About, Title } from "../../../../common"

export const Why = () => {
    return (
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
                    <Title text="Somos una firma con altos" />
                    <Title text="estándares de calidad" />
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
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Home%2FSebasHome.png?alt=media&token=c388f0ae-f71b-43f4-afd0-c2283b7db582)`

            }}
                data-aos={`${window.innerWidth > 768 ? "fade-down" : ""}`}
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >

            </div>

        </section>
    )
}