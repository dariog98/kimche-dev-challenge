import { createPortal } from 'react-dom'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Modal= ({ data, show, handleClose }) => {
    if (show) {
        return createPortal(
            <>
                <div className='fade modal-backdrop show'/>

                <div className='fade modal show d-block' tabIndex='-1'>
                    <div className={`modal-dialog modal-dialog-centered modal-lg`}>

                        <div className='modal-content shadow-lg'>
                            <div className='position-absolute' style={{ top: 0, right: 0 }}>
                                <button
                                    className='btn btn-outline-light rounded-circle m-2'
                                    style={{ width: '2.5rem', height: '2.5rem' }}
                                    onClick={handleClose}
                                >
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <FontAwesomeIcon icon={faX} size='1x' className='m-0 p-0'/>
                                    </div>
                                </button>
                            </div>
                            <div className='d-flex flex-wrap' style={{ borderRadius: 'inherit' }}>
                                <img src={data.image} className='modal-image'/>

                                <div className='flex-grow-1 d-flex flex-column gap-2 justify-content-center align-items-center p-3'>
                                    <span className='fw-bold text-light fs-4'>{data.name}</span>
                                    <div>
                                        <span className='fw-bold text-light pe-1'>Status:</span>
                                        <span>{data.status}</span>
                                    </div>
                                    <div>
                                        <span className='fw-bold text-light pe-1'>Species:</span>
                                        <span>{data.species}</span>
                                    </div>
                                    <div>
                                        <span className='fw-bold text-light pe-1'>Gender:</span>
                                        <span>{data.gender}</span>
                                    </div>
                                    <div>
                                        <span className='fw-bold text-light pe-1'>Type:</span>
                                        <span>{data.type}</span>
                                    </div>
                                    <div>
                                        <span className='fw-bold text-light pe-1'>Location:</span>
                                        <span>{data.location.name}</span>
                                    </div>
                                    <div>
                                        <span className='fw-bold text-light pe-1'>Origin:</span>
                                        <span>{data.origin.name}</span>
                                    </div>
                                    <div>
                                        <span className='fw-bold text-light pe-1'>Dimension:</span>
                                        <span>{data.origin.dimension ?? 'unknown'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        , document.getElementById('modal'))
    }
}

export default Modal