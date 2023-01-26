import { CardTeamMember } from '../../components';
import { Title, About } from '../../../../common';
import team1 from "../../../../assets/imgs/home/team/35.jpg"
import team2 from "../../../../assets/imgs/home/team/36.jpg"
import team3 from "../../../../assets/imgs/home/team/39.jpg"
import team4 from "../../../../assets/imgs/home/team/40.jpg"
import team5 from "../../../../assets/imgs/home/team/42.jpg"
import team6 from "../../../../assets/imgs/home/team/43.jpg"
import team7 from "../../../../assets/imgs/home/team/44.jpg"
import team8 from "../../../../assets/imgs/home/team/64.jpg"
import team9 from "../../../../assets/imgs/home/team/6.jpg"
import team10 from "../../../../assets/imgs/home/team/46.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import parallax from "../../../../assets/imgs/home/bg-parallax.png"
import { Link } from '../../../../common/components/menu/item';
import "./style.sass"

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
                    slidesPerView={window.innerWidth > 768 ? 4 : 1}
                    navigation
                    autoplay={{ waitForTransition: true, delay: 3000 }}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => {}}
                    onSlideChange={() => {}}
                >
                    <SwiperSlide><CardTeamMember img={team1} name="Javier Alfonso Martinez " specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team6} name="Paula Milena Rosero Velásquez" specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team7} name="Camila Cortes Acosta " specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team2} name="Laura Daniela Ramírez Franco" specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team10} name="Julieta Agudelo Henao" specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team3} name="Andrea Mosquera Portilla" specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team8} name="Sebastian Torres " specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team4} name="Andres Mora" specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team5} name="Jeisson Orlando Florez Galindo" specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                    <SwiperSlide><CardTeamMember img={team9} name="Cesar" specialist=" Abogado penalista, master en derecho administrativo" /></SwiperSlide>
                </Swiper>

                <section className="Container_Team--footer">
                    <div className='Container_Team--footer-contentText'>
                        <p className='Container_Team--footer--txt'>Te invitamos a que conozcas mas en profundidad todo sobre los servicios que ofrecemos</p>
                    </div>
                    <div>
                        <Link text="Quiero más información" link="/areas-trabajo" modifier="buttonWithouColorBlack " />

                    </div>
                </section>
            </div>
        </section>
    )
}