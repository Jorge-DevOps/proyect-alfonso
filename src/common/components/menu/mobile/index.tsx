import logo from "../../../../assets/imgs/footer/LogoName.png";
import hamburguer from "../../../../assets/imgs/menu/hamburguer.svg";
import { Link } from "../item";

import "./style.sass"

export const MenuMobile = () => {
    return (

        <nav className="Content_MenuMobile">
            <div className="Content_MenuMobile--header">
                <img src={logo} alt="logo" className="Content_MenuMobile--logo" />
                <img src={hamburguer} alt="logo" className="Content_MenuMobile--cta" />
            </div>
            <section className="Content_MenuMobile--subMenu">
                <div className="text Content_MenuMobile--item">
                    <Link className="Header_Item" text="Home" link="home" modifier="menu" />
                </div>
                <div className="text Content_MenuMobile--item">
                    <Link className="Header_Item" text="Quienes Somos" link="quienes-somos" modifier="menu" />
                </div>
                <div className="text Content_MenuMobile--item">

                    <Link className="Header_Item" text="Nuestro Equipo" link="nuestro-equipo" modifier="menu" />

                </div>
                <details className="Details_SubMenu" >
                    <summary className="Details_SubMenu--title">
                        <Link text="Áreas de trabajo" className="Header_Item" link="/areas-trabajo" modifier="menu" />
                        <span className="Details_SubMenu--flecha"></span>
                    </summary>
                    <ol className="Details_SubMenu--list">
                        <li className="text Details_SubMenu--item">Área 1</li>
                        <li className="text Details_SubMenu--item">Área 2</li>
                        <li className="text Details_SubMenu--item">Área 3</li>
                        <li className="text Details_SubMenu--item">Área 4</li>
                        <li className="text Details_SubMenu--item">Área 5</li>
                        <li className="text Details_SubMenu--item">Área 6</li>
                    </ol>
                </details>
            </section>

        </nav>
    )
}