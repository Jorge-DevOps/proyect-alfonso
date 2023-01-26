import "./style.sass"

type CardTeamMemberProps = {
    name: string;
    specialist: string;
    img: string;
}

export const CardTeamMember = ({ img, name, specialist }: CardTeamMemberProps) => {
    return (
        <div className="Container_TeamMember--card"
        >
            <img src={img} alt="" className="Container_TeamMember--card--img" />
            <div className="Container_TeamMember--card--details">
                <p className="Container_TeamMember--card--name text">{name}</p>
                <p className="Container_TeamMember--card--specialist text">{specialist}</p>
            </div>
        </div>

    )
}
