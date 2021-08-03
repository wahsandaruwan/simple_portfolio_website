const SocialBtn = (props) => {
    return (
        <>
            <a href={props.url} target="_blank" className="soc-btn">{props.type}</a>
        </>
    )
}

export default SocialBtn
