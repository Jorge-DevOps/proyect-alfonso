import logo from "../../../assets/imgs/whatsappHover.svg"
import "./style.sass"
export const WhaMe = () => {
    return (
        <>
            <div className="wha-me">
                <a href="https://wa.me/573115793478" target="_blank" rel="noreferrer" className="wha-me_aRef">
                    <img src={logo} alt="wha-me" className="wha-me_Img" />
                </a>
            </div>
        </>
    )
}