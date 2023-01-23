import "./style.sass"

type TitleProps = {
    text: string
    center?: boolean
    modifier?: string

}
export const About = ({ text, center, modifier }: TitleProps) => {
    return (
        <div className={`Container_AboutTitle Container_AboutTitle--${modifier}`}>
            <div className={`Container_AboutTitle--barra Container_AboutTitle--barra--${modifier}`}></div>
            <h1 className={`Container_AboutTitle--text Container_AboutTitle--text--${modifier} text`}>{text}</h1>
            {center && <div className={`Container_AboutTitle--barra Container_AboutTitle--barra--${modifier}`} ></div>}


        </div>)
}