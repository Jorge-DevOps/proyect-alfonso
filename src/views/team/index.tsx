
import { PosHeader, GeneralCard } from "../../common"
import bgBlanco from "../../assets/imgs/home/background/bg-formas.svg"
import data from '../../services/team.json';
import "./style.sass"

export const Team = () => {
    return (<>
        <PosHeader title={data.team.banner.title} modifier="Team" subTitle={data.team.banner.subtitle} image={data.team.banner.background} />
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