import { CardTeamMember } from '../../components';
import { Title, About } from '../../../../common';
import team1 from "../../../../assets/imgs/home/team1.png"
import team2 from "../../../../assets/imgs/home/team2.jpg"
import team3 from "../../../../assets/imgs/home/team3.jpg"
import team4 from "../../../../assets/imgs/home/team4.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import parallax from "../../../../assets/imgs/home/bg-parallax.png"

export const Team = () => {
    return (
            <section className="Container_Team" style={{
                background: `linear-gradient(to bottom, #13181eb8, #13181e), url(${parallax}) no-repeat center center fixed`
            }}>
            <About text="Conoce nuestro equipo" center modifier="team" />
            <Title text="Socios abogados" modifier="team" />
            <div className="Container_Team--slider">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={window.innerWidth > 768 ? 4: 1}
                    navigation
                    autoplay={{ waitForTransition: true, delay: 3000 }}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><CardTeamMember img={team1} name="Javier Alfonso Martinez " specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team2} name="Portilla M. Andre" specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team3} name="Paulita Maria Rosero" specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team4} name="Sebastian Torres " specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team1} name="Laura Daniela Ramirez" specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team1} name="Caudita Ramirez" specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team2} name="Camila Cortes Acosta " specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team3} name="Javier Alfonso Martinez " specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team4} name="Javier Alfonso Martinez " specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                </Swiper>
                <section className="Container_Team--footer">
                    <div className='Container_Team--footer-contentText'>
                        <p className='Container_Team--footer--txt'>Te invitamos a que conozcas mas en profundidad todo sobre los servicios que ofrecemos</p>
                    </div>
                    <div>
                        <a href="" className="buttonWithouColorBlack">Quiero más información</a>
                    </div>
                </section>
            </div>
        </section>
    )
}