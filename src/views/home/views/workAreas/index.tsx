import { Title, About } from "../../../../common"
import { CardWorkArea } from "../../components"
import balance from "../../../../assets/imgs/home/balance.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import parallax from "../../../../assets/imgs/home/bg-parallax.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.sass"
import { Link } from "../../../../common/components/menu/item";

export const WorkAreas = () => {
    return (
        <section className="Container Container_WorkAreas" style={{
            background: `linear-gradient(to bottom, #13181eb8, #13181e), url(${parallax}) no-repeat center center fixed`
        }}>
            <div className="Container_WorkAreas--text">
                <About text={"Quiénes somos"} center modifier="workAreas" />
                <Title text="Áreas de trabajo" modifier="workAreas" />
            </div>
            {window.innerWidth > 768 ? (
                <div className="Container_WorkAreas--cards">
                    <div data-aos="flip-left" data-aos-duration="1500">
                        <CardWorkArea title="Área 1" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500">
                        <CardWorkArea title="Área 2" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500">
                        <CardWorkArea title="Área 3" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500">
                        <CardWorkArea title="Área 4" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500">
                        <CardWorkArea title="Área 5" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500">
                        <CardWorkArea title="Área 6" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                    </div>
                </div>) : (
                <div className="Container_WorkAreas--cards">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        autoplay={{ waitForTransition: true, delay: 3000 }}
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <CardWorkArea title="Área 1" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                                <CardWorkArea title="Área 2" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <CardWorkArea title="Área 3" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                                <CardWorkArea title="Área 4" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <CardWorkArea title="Área 5" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />
                                <CardWorkArea title="Área 6" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={balance} />

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            )}
            <section className="Container_WorkAreas--more">
                <div className="Container_WorkAreas--moreText">
                    <p className="Container_WorkAreas--moreTexto text">
                        Te invitamos a que conozcas mas en profundidad todo sobre los servicios que ofrecemos
                    </p>
                </div>
                <div className="Container_WorkAreas--moreCta">
                    <Link text="Ver todos los servicios" link="/areas-trabajo" modifier="buttonWithouColor " />

                    <span className=" Container_WorkAreas--moreContact text">Contáctanos <br />
                        +57 320 123 1234
                    </span>
                </div>
            </section>
        </section>
    )
}