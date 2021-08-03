const NormalBtn = (props) => {
    return (
        <>
            <a href={props.url} target="_blank" className={props.class}>{props.text}</a>
        </>
    )
}

export default NormalBtn
