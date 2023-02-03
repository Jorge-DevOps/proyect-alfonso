import { useEffect } from "react";
import bgBlanco from "../../assets/imgs/home/background/bg-formas.svg"
import { GeneralCard, Link } from "../../common"
import { Contact, Partners, Team, WorkAreas } from "./views"
import { usefirebase } from "../../services/firbase";
import data from '../../services/home.json';
import "./style.sass"


export const Home = () => {
    const { db } = usefirebase();
    // db.collection("home").get().then((querySnapshot) => {

    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // });
    useEffect(() => {
      console.log(db.app.name);
    }, [db])
    

    return (
        <>
            {
                Object.keys(data).length > 0 && (
                    <>
                        <section className="Container Container_Banner" style={{
                            backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Home%2Fbanner-desk-final.png?alt=media&token=790d54dc-d0c9-4bfb-bebd-0b02a953d1d3)"
                        }}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0"
                        >
                            <div className="Container_Banner--text">
                                <p className="Container_Banner--title textTitle">Asistencia Jurídica Especializada</p>
                                <p className="Container_Banner--subTitle text">Litigio Estratégico</p>
                            </div>
                            <div className="Container_Banner--href">
                                <Link text="Áreas de Práctica" link="/areas-de-practica" modifier="buttonWithouColorWhite" />
                                <Link text="Contáctenos" link="/contacto" modifier="buttonWithouColorWhite" />

                            </div>
                            <div className="Container_Banner--transparent"></div>
                        </section>

                        <GeneralCard title={data.home.about.title} image={data.home.about.image} bgFondo={bgBlanco} text={data.home.about.text} subtitle={data.home.about.subtitle} type={data.home.about.type} />
                        <WorkAreas />
                        <GeneralCard title={data.home.why.title} image={data.home.why.image} bgFondo={bgBlanco} text={data.home.why.text} subtitle={data.home.why.subtitle} type={data.home.why.type}  reverse />

                        <section style={{
                            backgroundImage: `url(${bgBlanco})`
                        }}>
                            <Team />
                            <Partners />
                            <Contact />
                        </section>
                    </>
                )
            }
        </>
    )
}