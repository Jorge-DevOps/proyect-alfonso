
import { WhaMe } from "../whaMe";
import logo from "../../../assets/imgs/footer/LogoName.png";

import "./style.sass"

export const Footer = () => {
    return (
        <>
            <footer className="Footer">
                <section className="Footer_Section--logo">
                    <img src={logo} alt="" className="Footer_Section--img" />
                </section>
                <section className="Footer_Section--about">
                    <section className="Footer_Section--enlaces">
                        <ul className="Footer_Section--list">
                            <a href="http://" className="Footer_Section--aLink"><li className="Footer_Section--item-title textTitle">Enlaces</li></a>
                            <a href="http://" className="Footer_Section--aLink"><li className="Footer_Section--item text">Áreas de servicio</li></a>
                            <a href="http://" className="Footer_Section--aLink"><li className="Footer_Section--item text">Quienes somos</li></a>
                            <a href="http://" className="Footer_Section--aLink"><li className="Footer_Section--item text">Nuestro equipo</li></a>
                        </ul>
                    </section>
                    <section className="Footer_Section--contacto">
                        <ul className="Footer_Section--list">
                            <a href="http://" className="Footer_Section--aLink"><li className="Footer_Section--item textTitle">Contacto</li></a>
                            <a href="http://" className="Footer_Section--aLink"><li className="Footer_Section--item text">Si tienes alguna pregunta o deseas conocer más sobre Javier Alfonso Abogados</li></a>
                            <a href="http://" className="Footer_Section--aLink buttonWithouColor text">Enviar petición</a>
                        </ul>
                    </section>
                    <section className="Footer_Section--redes">
                        <ul className="Footer_Section--list">
                            <a href="http://" className="Footer_Section--aLink"><li className="Footer_Section--item text">correo@gmail.com</li></a>
                            <a href="http://" className="Footer_Section--aLink"><li className="Footer_Section--item text ">+57 320 123 1234</li></a>
                            <a href="http://" className="Footer_Section--aLink"><li className="Footer_Section--item text">Bogotá DC</li></a>
                            <a href="http://" className="Footer_Section--aLink"><li className="Footer_Section--item text">REDES</li></a>
                            <a href="http://" className="Footer_Section--aLink"><li className="Footer_Section--item text">© 2023 Javier Alfonso Abogados.</li></a>
                        </ul>

                    </section>

                </section>
            </footer>
            <WhaMe />
        </>
    );


}