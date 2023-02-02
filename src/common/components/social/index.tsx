import "./style.sass"
import instagram from "../../../assets/imgs/icons/social/instagram.svg"
import youtube from "../../../assets/imgs/icons/social/youtube.svg"
import facebook from "../../../assets/imgs/icons/social/facebook.svg"

export const Social = () => {
    return (<>
        <div className="Social">
            <ul className="Social_List">
                <li className="Social_List--item">
                    <a href="https://www.instagram.com/javieralfonsoabogados/?hl=es" target="_blank" className="Social_List--aRef">
                        <img src={instagram} alt="" className="Social_List--icon" />
                    </a>
                </li>
                <li className="Social_List--item">
                    <a href="https://www.facebook.com/javieralfonsoabogados/" target="_blank" className="Social_List--aRef">
                        <img src={facebook} alt="" className="Social_List--icon" />
                    </a>
                </li>
                <li className="Social_List--item">
                    <a href="https://www.youtube.com/@javieralfonsoabogados" target="_blank" className="Social_List--aRef">
                        <img src={youtube} alt="" className="Social_List--icon" style={{ height: "2.5rem" }} />
                    </a>
                </li>
            </ul>
        </div>
    </>)
}