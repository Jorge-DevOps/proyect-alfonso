import logo from "../../../../assets/imgs/logo.png"
import { Link } from "../item"

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
                            <Link text="Áreas de trabajo" className="Header_Item" link="/areas-trabajo" modifier="menu" />
                            <div className=" Header_Sublist--content">
                                <ul className="Header_Sublist--list">
                                    <li className="Header_List--SubMenu">
                                        <Link className="Header_Item" text="Derecho civil" link="derecho-civil" modifier="SubMenu" />
                                    </li>
                                    <li className="Header_List--SubMenu">
                                        <Link className="Header_Item" text="Derecho laboral" link="derecho-laboral" modifier="SubMenu" />
                                    </li>
                                    <li className="Header_List--SubMenu">
                                        <Link className="Header_Item" text="Derecho penal" link="derecho-penal" modifier="SubMenu" />
                                    </li>
                                    <li className="Header_List--SubMenu">
                                        <Link className="Header_Item" text="Derecho administrativo" link="derecho-administrativo" modifier="SubMenu" />
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </li>
                    <li className="Header_List--item">
                        <div className="Header_Item--link Header_List--workAreas">
                            <Link className="Header_Item" text="Quienes somos" link="quienes-somos" modifier="menu" />
                        </div>
                    </li>
                    <li className="Header_List--item">
                        <div className="Header_Item--link Header_List--workAreas">
                            <Link className="Header_Item" text="Nuestro equipo" link="nuestro-equipo" modifier="menu" />
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