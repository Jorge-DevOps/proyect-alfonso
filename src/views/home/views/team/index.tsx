import { CardTeamMember } from '../../components';
import { Title, About } from '../../../../common';
import parallax from "../../../../assets/imgs/home/bg-parallax.png"
import { Link } from '../../../../common/components/menu/item';
import "./style.sass"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const Team = () => {

    return (
        <section className="Container_Team" style={{
            background: `linear-gradient(to bottom, #13181eb8, #13181e), url(${parallax}) no-repeat center center fixed`
        }}>
            <About text="Conoce nuestro equipo" center modifier="team" />
            <Title text="Socios abogados" modifier="team" />
            <div className="Container_Team--slider">
                {<OwlCarousel items={4}
                    className="owl-theme"
                    loop
                    nav
                    autoPlay
                    responsive={{
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 4
                        }
                    }}
                    margin={8} >
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FJavier.jpg?alt=media&token=d335f8a2-97b5-4449-aed2-663703093715"} name="Javier Andrés Alfonso Martinez " specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FPaula.jpg?alt=media&token=a5183995-6ad5-4cf9-a0df-9fd87c518412"} name="Paula Milena Rosero Velásquez" specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FCamila.jpg?alt=media&token=5f736147-6a27-4581-98e9-bb5434b838df"} name="Camila Cortes Acosta " specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FLaura.jpg?alt=media&token=75e8c952-24eb-4b88-87f9-3bb07c9c5b95"} name="Laura Daniela Ramírez Franco" specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FJulieta.jpg?alt=media&token=858e7cba-ac1d-4740-b3a7-fad64ee02e8d"} name="Julieta Agudelo Henao" specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FAndrea.jpg?alt=media&token=31af2f15-9c4a-4959-aac0-78ce7cf101e2"} name="Andrea Mosquera Portilla" specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FSebastian.jpg?alt=media&token=420197ea-e778-4f85-a218-fa50c343394e"} name="Sebastian Torres " specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FNicolas.jpg?alt=media&token=1b1e83bc-40c8-40a0-9165-e13dc0cd88c8"} name="Andres Mora" specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FJeison.jpg?alt=media&token=05887f74-c3f6-4bc2-b4a4-2523d3f6be37"} name="Jeisson Orlando Florez Galindo" specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FCesar.jpg?alt=media&token=59a12191-f8c1-4b91-8317-d1ec441d6031"} name="Cesar" specialist=" Abogado penalista, master en derecho administrativo" />
                </OwlCarousel>
                }

                <section className="Container_Team--footer">
                    <div className='Container_Team--footer-contentText'>
                        <p className='Container_Team--footer--txt'>Te invitamos a que conozcas mas en profundidad todo sobre los servicios que ofrecemos</p>
                    </div>
                    <div>
                        <Link text="Quiero más información" link="/areas-de-practica" modifier="buttonWithouColorBlack " />

                    </div>
                </section>
            </div>
        </section>
    )
}