import { Link } from "../menu/item";
import { Title } from "../title"
import "./style.sass"

type PosHeaderProps = {
    title: string;
    subTitle: string;
    image: string;
    modifier?: string;
}

export const PosHeader = ({ title, subTitle, image, modifier }: PosHeaderProps) => {
    return (
        <div className={`PosHeader PosHeader__${modifier}`} style={{ background: `linear-gradient(to bottom, rgba(19, 24, 30, 0.73), rgba(19, 24, 30, 0.73)), url(${image}) no-repeat center center fixed` }} >
            <div className="PosHeader__title">
                <Title text={title} modifier="PosHeader_title" />
                <Title text={subTitle} modifier="PosHeader_subtitle" />
                <Link text="Agenda tu cita" link="/areas-de-practica" modifier="buttonWithouColorWhite " />

            </div>
        </div>
    )
}