import { useState } from "react"
import logo from "../../../../assets/imgs/logo.png"
import penal from "../../../../assets/imgs/menu/derPenal.svg"
import { Link } from "../item"
import "./style.sass"

export const MenuDesk = () => {

    return (
        <>
            <section className="Header_Logo">
                <div className="Header_Logo--img">
                    <img src={logo} alt="logo" />
                </div>
                <div className="Header_Logo--txt">
                    <p className="Header_Logo--name">Javier Alfonso</p>
                    <p className="Header_Logo--brand">Abogados</p>

                </div>
            </section>
            <nav className="Header_List">
                <ul className="Header_List">
                    <li className="Header_List--item">
                        <div className="Header_Item--link Header_List--workAreas">
                            <Link text="Home" link="home" modifier="menu" />
                        </div>
                    </li>
                    <li className="Header_List--item">
                        <div className="Header_Item--link Header_List--workAreas">
                            <Link text="Áreas de trabajo" link="/areas-trabajo" modifier="menu" />
                            <div className="Header_List--item--subList">
                                <div className=" Header_Sublist--content">
                                    <ul className="Header_Sublist--list">
                                        <li className="Header_List--SubMenu">
                                            <img src={penal} alt="" className="Header_List--SubMenu--icon" />
                                            <div className="Header_List--SubMenu--text">
                                                <Link text="Derecho penal" link="derecho-civil" modifier="SubMenu" />
                                                <p className="Header_List--SubMenu--description text">Lorem Ipsum es simplemente el texto .</p>

                                            </div>
                                        </li>
                                        <li className="Header_List--SubMenu">
                                            <img src={penal} alt="" className="Header_List--SubMenu--icon" />
                                            <div className="Header_List--SubMenu--text">
                                                <Link text="Casación Penal" link="derecho-laboral" modifier="SubMenu" />
                                                <p className="Header_List--SubMenu--description text">Lorem Ipsum es simplemente el texto .</p>

                                            </div>
                                        </li>
                                        <li className="Header_List--SubMenu">
                                            <img src={penal} alt="" className="Header_List--SubMenu--icon" />
                                            <div className="Header_List--SubMenu--text">
                                                <Link text="Extincion de dominio" link="derecho-penal" modifier="SubMenu" />
                                                <p className="Header_List--SubMenu--description text">Lorem Ipsum es simplemente el texto .</p>

                                            </div>
                                        </li>


                                    </ul>
                                    <ul className="Header_Sublist--list">

                                        <li className="Header_List--SubMenu">
                                            <img src={penal} alt="" className="Header_List--SubMenu--icon" />
                                            <div className="Header_List--SubMenu--text">
                                                <Link text="Extincion de dominio" link="derecho-penal" modifier="SubMenu" />
                                                <p className="Header_List--SubMenu--description text">Lorem Ipsum es simplemente el texto .</p>

                                            </div>
                                        </li>
                                        <li className="Header_List--SubMenu">
                                            <img src={penal} alt="" className="Header_List--SubMenu--icon" />
                                            <div className="Header_List--SubMenu--text">
                                                <Link text="Administrativo" link="derecho-administrativo" modifier="SubMenu" />
                                                <p className="Header_List--SubMenu--description text">Lorem Ipsum es simplemente el texto .</p>

                                            </div>
                                        </li>
                                        <li className="Header_List--SubMenu">
                                            <img src={penal} alt="" className="Header_List--SubMenu--icon" />
                                            <div className="Header_List--SubMenu--text">
                                                <Link text="Administrativo" link="derecho-administrativo" modifier="SubMenu" />
                                                <p className="Header_List--SubMenu--description text">Lorem Ipsum es simplemente el texto .</p>

                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </li>
                    <li className="Header_List--item">
                        <div className="Header_Item--link Header_List--workAreas">
                            <Link text="Quienes somos" link="quienes-somos" modifier="menu" />
                        </div>
                    </li>
                    <li className="Header_List--item">
                        <div className="Header_Item--link Header_List--workAreas">
                            <Link text="Nuestro equipo" link="nuestro-equipo" modifier="menu" />
                        </div>
                    </li>


                </ul>
            </nav>
            <section className="Header_Contacto">
                Contáctanos
            </section>
        </>
    )
}