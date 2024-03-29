import Button from './Button'

const Pagination = ({ currentPage, totalPages, handlePage }) => {
    const buttons = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <div>
            <div className='input-group'>
                {
                    buttons.map(index => {
                        const isActived = currentPage === index
                        return (
                            <Button
                                key={index}
                                className='btn-outline-light'
                                isActived={isActived}
                                handleOnClick={() => handlePage(index)}
                                text={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pagination