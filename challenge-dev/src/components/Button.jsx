const Button = ({ icon, text, className, handleOnClick, isActived }) => {
    return (
        <button className={`btn ${className} ${isActived && 'active'}`} onClick={handleOnClick}>
            {text}
        </button>
    )
}

export default Button