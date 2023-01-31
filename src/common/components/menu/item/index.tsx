import { NavLink } from "react-router-dom";
import "./style.sass";

type LinkType = {
    link: string;
    text?: string;
    children?: JSX.Element;
    modifier: string;
};

export const Link = ({ link, text,  children, modifier,  }: LinkType) => {
    return (
        <NavLink to={link} className={`MenuLink Link_Nav--${modifier}`} >
            <h4 className={` text MenuLink__Text Link_${modifier} ` }>{text}</h4>
            {children}
        </NavLink>
    );
};
