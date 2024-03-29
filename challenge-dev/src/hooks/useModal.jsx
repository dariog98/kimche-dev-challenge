import { useState } from 'react'

const useModal = () => {
    const [data, setData] = useState(undefined)
    const [show, setShow] = useState(false)

    const handleOpen = (data) => {
        document.body.style.overflow = 'hidden'
        setData(data)
        setShow(true)
    }

    const handleClose = () => {
        setData(undefined)
        setShow(false)
        document.body.style.overflow = ''
    }

    return {
        show,
        data,
        handleClose,
        handleOpen,
    }
}

export default useModal