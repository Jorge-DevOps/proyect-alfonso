import { Link } from "../../../../common"
import "./style.sass"

type CardWorkAreaProps = {
    title: string;
    description: string;
    img: string;
    link: string;
}
export const CardWorkArea = ({ img, title, description,link }: CardWorkAreaProps) => {
    return (
        <div className="Container_WorkAreas--card">
            <img src={img} alt="" className="Container_WorkAreas--card--img" />
            <h1 className="Container_WorkAreas--card--title textTitle">{title}</h1>
            <p className="Container_WorkAreas--card--txt text">{description}</p>
            <Link link={link} modifier="card--href" text="Conocer más"><p className="text Container_WorkAreas--card--hrefTxt"></p></Link>
        </div>

    )
}