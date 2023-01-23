import { Title } from "../../../../common"
import estrategico1 from "../../../../assets/imgs/home/LogoEstrategico1.png"
import estrategico2 from "../../../../assets/imgs/home/LogoEstrategico2.jpeg"
import estrategico3 from "../../../../assets/imgs/home/LogoEstrategico3.jpeg"


export const Partners = () => {
    return (<>
        <section className="Container_Firmas" >
            <Title text="Aliados estrategicos" modifier="firmas" />
            <div className="Container_Firmas--images">
                <img className="Container_Firmas--imgMember" src={estrategico2} alt="" />
                <img className="Container_Firmas--imgMember" src={estrategico3} alt="" />
                <img className="Container_Firmas--imgMember" src={estrategico1} alt="" />
            </div>
        </section>
    </>)
}