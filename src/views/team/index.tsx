
import { PosHeader, GeneralCard } from "../../common"
import bgBlanco from "../../assets/imgs/home/background/bg-formas.svg"
import data from '../../services/team.json';
import "./style.sass"

export const Team = () => {
    return (<>
        <PosHeader title="Conoce nuestro equipo" modifier="Team" subTitle="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." image={"https://firebasestorage.googleapis.com/v0/b/javieralfonsoabogados-1360d.appspot.com/o/Team%2FteamAll.jpg?alt=media&token=485d9ed0-164e-40fb-8b75-01a0c130559e"} />
        <GeneralCard title={data.team.team.title} image={data.team.team.image} bgFondo={bgBlanco} text={data.team.team.text} subtitle={data.team.team.subtitle} type={data.team.team.type} reverse />
        <section className="Partner">

            {
                data.team.partners.map((item, index) => {
                    return (
                        <div className="Partner_Container">
                            <img className="Partner_img" src={item.image} alt="" />
                            <div className="Partner_text">
                                <p className="Partner_Name text"   >{item.name}</p>
                                <p className="Partner_Resume text">   {item.resume}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>

    </>)

}