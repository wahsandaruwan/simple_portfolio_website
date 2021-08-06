// Input Box Component
const InputBox = (props) => {
    return (
        <>
            <input type={props.type} placeholder={props.place} className="inpb" required/>
        </>
    )
}

export default InputBox
