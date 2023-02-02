import { NavLink } from "react-router-dom";
import "./style.sass";

type LinkType = {
    link: string;
    text?: string;
    children?: JSX.Element;
    modifier: string;
    onClick?: () => void;
};

export const Link = ({ link, text, children, modifier, onClick }: LinkType) => {
    return (
        <NavLink to={link} className={`MenuLink Link_Nav--${modifier}`} onClick={onClick} >
            <h4 className={` text MenuLink__Text Link_${modifier} ` }>{text}</h4>
            {children}
        </NavLink>
    );
};
