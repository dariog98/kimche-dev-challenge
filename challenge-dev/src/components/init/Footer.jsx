import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer>
            <div className='container text-secondary'>
                <div className='d-flex justify-content-center align-items-center py-2'>

                    <div className='text-end pe-2'>
                        <div>
                            <FontAwesomeIcon icon={faGithub} className='pe-1'/>
                            <small><a className='text-light underline-on-hover' href='https://github.com/dariog98/kimche-dev-challenge'>Source code</a></small>
                        </div>
                        <small>2024</small>
                    </div>

                    <div className='border-start ps-2 d-flex flex-column gap-1'>
                        <small>Rick and Morty character search</small>
                        <small>Developer by <a className='text-light underline-on-hover' href='https://github.com/dariog98'>Gonzalez Dario</a></small>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer