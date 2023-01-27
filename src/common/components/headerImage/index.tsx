import { Link } from "../menu/item";
import { Title } from "../title"
import bgParallax from "../../../assets/imgs/services/bg-parallax.png"
import "./style.sass"

type PosHeaderProps = {
    title: string;
    subTitle: string;
}

export const PosHeader = ({ title, subTitle }: PosHeaderProps) => {
    return (
        <div className="PosHeader" style={{ background: `linear-gradient(to bottom, rgba(19, 24, 30, 0.73), rgba(19, 24, 30, 0.73)), url(${bgParallax}) no-repeat center center fixed` }} >

            {/*  style={{
            background: `linear-gradient(to bottom, #13181eb8, #13181e), url(${bgParallax}) no-repeat center center fixed`
        }}> */}
            <div className="PosHeader__title">
                <Title text={title} modifier="PosHeader_title"/>
                <Title text={subTitle} modifier="PosHeader_subtitle" />
                <Link text="Agenda tu cita" link="/areas-trabajo" modifier="buttonWithouColorWhite " />

            </div>
        </div>
    )
}