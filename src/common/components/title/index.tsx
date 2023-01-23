import "./style.sass"

type titleProps = {
    text: string;
    modifier?: string;
}
export const Title = ({ text,modifier }: titleProps) => {
    return (
        <div className="Container_Title">
            <p className={`Container_Title--title  Container_Title--title--${modifier} textTitle` }>{text}</p>
        </div>
    )
}