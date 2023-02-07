import { CardTeamMember } from '../../components';
import { Title, About } from '../../../../common';
import parallax from "../../../../assets/imgs/home/bg-parallax.png"
import { Link } from '../../../../common/components/menu/item';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./style.sass"

export const Team = () => {

    return (
        <section className="Container_Team" style={{
            background: `linear-gradient(to bottom, #13181eb8, #13181e), url(${parallax}) no-repeat center center fixed`
        }}>
            <About text="Conoce nuestro equipo" center modifier="team" />
            <Title text="Abogados" modifier="team" />
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
                        750: {
                            items: 3
                        },
                        1100: {
                            items: 3
                        },
                        1500: {
                            items: 4
                        }

                    }}
                    margin={8} >
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FJavier.jpg?alt=media&token=9767419d-3b50-4a5e-a042-b92fe11173ec"} name="Javier Andrés Alfonso Martinez " specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FPaula.jpg?alt=media&token=a5183995-6ad5-4cf9-a0df-9fd87c518412"} name="Paula Milena Rosero Velásquez" specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FCamila.jpg?alt=media&token=e0a68a38-85d2-495d-85d1-f49a0e0c5160"} name="Camila Cortes Acosta " specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FLaura.jpg?alt=media&token=75e8c952-24eb-4b88-87f9-3bb07c9c5b95"} name="Laura Daniela Ramírez Franco" specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FJulieta.jpg?alt=media&token=858e7cba-ac1d-4740-b3a7-fad64ee02e8d"} name="Julieta Agudelo Henao" specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FAndrea.jpg?alt=media&token=ee556527-535b-419b-b9dc-b770ac3d6e8d"} name="Andrea Mosquera Portilla" specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FSebastian.jpg?alt=media&token=2ba9fcd2-cb18-4c88-a5d9-be1ae9add125"} name="Sebastian Torres " specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FNicolas.jpg?alt=media&token=1b1e83bc-40c8-40a0-9165-e13dc0cd88c8"} name="Andres Mora" specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FJeison.jpg?alt=media&token=05887f74-c3f6-4bc2-b4a4-2523d3f6be37"} name="Jeisson Orlando Florez Galindo" specialist=" Abogado penalista, master en derecho administrativo" />
                    <CardTeamMember img={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FCesar.jpg?alt=media&token=fe535d97-39bf-4ae6-9422-dbc59f6f907a"} name="Cesar" specialist=" Abogado penalista, master en derecho administrativo" />
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