import logo from "../../../assets/imgs/whatsapp.svg"
import "./style.sass"
export const WhaMe = () => {
    return (
        <>
            <div className="wha-me">
                <a href="https://wa.me/573005055000" target="_blank" rel="noreferrer" className="wha-me_aRef">
                    <img src={logo} alt="wha-me" className="wha-me_Img" />
                </a>
            </div>
        </>
    )
}