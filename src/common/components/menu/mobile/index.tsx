import { useState } from "react";
import logo from "../../../../assets/imgs/footer/logo.svg";
import hamburguer from "../../../../assets/imgs/menu/hamburguer.svg";
import x from "../../../../assets/imgs/menu/x.svg";
import { Link } from "../item";

import "./style.sass"

export const MenuMobile = () => {

    const [open, setOpen] = useState(false)

    return (

        <nav className="Content_MenuMobile">
            <div className="Content_MenuMobile--header">
                <img src={logo} alt="logo" className="Content_MenuMobile--logo" />
                {open ? (
                    <img src={x} alt="logo" className="Content_MenuMobile--cta" onClick={(prev) => { setOpen(!open) }} />
                ) : (
                    <img src={hamburguer} alt="logo" className="Content_MenuMobile--cta" onClick={(prev) => { setOpen(!open) }} />
                )}

            </div>

            <section className={`Content_MenuMobile--subMenu ${open && "slide-right"}`} style={{ left: open ? "-100vh" : "0" }}>
                <div className="text Content_MenuMobile--item">
                    <Link text="Home" link="home" modifier="menu" />
                </div>
                {/* <div className="text Content_MenuMobile--item">
                    <Link text="Quienes Somos" link="quienes-somos" modifier="menu" />
                </div> */}
                <div className="text Content_MenuMobile--item">

                    <Link text="Nuestro Equipo" link="nuestro-equipo" modifier="menu" />

                </div>
                <details className="Details_SubMenu" >
                    <summary className="Details_SubMenu--title">
                        <Link text="Áreas de Práctica" link="/areas-de-practica" modifier="menu" />
                        <span className="Details_SubMenu--flecha"></span>
                    </summary>
                    <ol className="Details_SubMenu--list">
                        <li className="text Details_SubMenu--item">Derecho Penal</li>
                        <li className="text Details_SubMenu--item">Derecho Civil</li>
                        <li className="text Details_SubMenu--item">Derecho Administrativo</li>
                        <li className="text Details_SubMenu--item">Derecho Laboral</li>
                        <li className="text Details_SubMenu--item">compliance y prevención de lavado de activos</li>
                        <li className="text Details_SubMenu--item">Fuerza Pública</li>
                        <li className="text Details_SubMenu--item">Inmobiliario</li>
                        <li className="text Details_SubMenu--item">Contratación estatal</li>
                    </ol>
                </details>
            </section>
        </nav>
    )
}