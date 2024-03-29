import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ icon, text, className, handleOnClick, isActived }) => {
    return (
        <button
        className={`btn d-flex justify-content-center align-items-center gap-1 text-truncate ${className} ${isActived ? 'active' : ''}`}
        onClick={handleOnClick}
        >
            {icon && <FontAwesomeIcon icon={icon}/>}
            {text}
        </button>
    )
}

export default Button