import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

const getPaginationPages = (currentPage, totalPages) => {
    const buttons = []

    if (currentPage >= 5) {
        for (let index = currentPage - 4; index <= currentPage; index++) {   
            buttons.push(index)       
        }
    } else {
        for (let index = 1; index <= currentPage; index++) {   
            buttons.push(index)
        }
    }
    if (currentPage + 4 <= totalPages) {
        for (let index = currentPage + 1; index <= currentPage + 4; index++) {   
            buttons.push(index)
        }
    } else {
        for (let index = currentPage + 1; index <= totalPages; index++) {   
            buttons.push(index)
        }
    }
    return buttons
}

const Pagination = ({ currentPage, totalPages, handlePage }) => {
    const buttons = getPaginationPages(currentPage, totalPages) //Array.from({ length: totalPages }, (_, i) => i + 1)

    const goToFirstPage = () => {
        handlePage(1)
    }

    const goToLastPage = () => {
        handlePage(totalPages)
    }

    return (
        <div>
            <div className='input-group'>
                <Button
                    className='btn-outline-system'
                    isDisabled={!totalPages}
                    handleOnClick={goToFirstPage}
                    icon={faChevronLeft}
                />

                {
                    buttons.map(value => {
                        const isActived = currentPage === value
                        return (
                            <Button
                                key={value}
                                className='btn-outline-system'
                                isActived={isActived}
                                handleOnClick={() => handlePage(value)}
                                text={value}
                            />
                        )
                    })
                }

                <Button
                    className='btn-outline-system'
                    isDisabled={!totalPages}
                    handleOnClick={goToLastPage}
                    icon={faChevronRight}
                />
            </div>
        </div>
    )
}

export default Pagination