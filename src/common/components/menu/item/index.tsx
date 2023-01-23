import { NavLink } from "react-router-dom";
import "./style.sass";

type LinkType = {
    link: string;
    text?: string;
    type?: string;
    children?: JSX.Element;
    modifier: string;
    className?: string;
};

export const Link = ({ link, text, type, children, modifier }: LinkType) => {
    return (
        <NavLink to={link} className={`MenuLink Link_${modifier}`}>
            <h4 className={` text MenuLink__Text Link_${modifier} ` }>{text}</h4>
            {children}
        </NavLink>
    );
};