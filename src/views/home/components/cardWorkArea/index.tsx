import "./style.sass"

type CardWorkAreaProps = {
    title: string;
    description: string;
    img: string;
}
export const CardWorkArea = ({ img, title, description }: CardWorkAreaProps) => {
    return (
        <div className="Container_WorkAreas--card">
            <img src={img} alt="" className="Container_WorkAreas--card--img" />
            <h1 className="Container_WorkAreas--card--title textTitle">{title}</h1>
            <p className="Container_WorkAreas--card--txt text">{description}</p>
            <a href="" className="Container_WorkAreas--card--href "><p className="text Container_WorkAreas--card--hrefTxt">Conocer más</p></a>
        </div>

    )
}