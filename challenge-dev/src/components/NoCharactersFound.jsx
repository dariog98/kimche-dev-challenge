import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NoCharactersFound = () => {
    return (
        <div className='d-flex flex-column gap-2'>
            <FontAwesomeIcon icon={faTriangleExclamation} size='10x'/>
            <span className='fw-bolder fs-5'>
                No characters was found
            </span>
        </div>
    )
}

export default NoCharactersFound