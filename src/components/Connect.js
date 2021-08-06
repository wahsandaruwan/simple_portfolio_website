// Connection Button Component
const Connect = (props) => {
    return (
        <>
            <a href={props.url} className="con-link">{props.icon} <span>{props.text}</span></a>
        </>
    )
}

export default Connect
