import { useEffect, useRef } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchInput = ({ placeholder, handleSearch, value }) => {
    const searchRef = useRef()

    const handleEnter = ({ keyCode }) => {
        if (keyCode === 13) {
            handleSearch(searchRef.current.value)
        }
    }

    useEffect(() => {
        searchRef.current.value = value ?? ''
    }, [value])

    return (
        <>
            <div className='input-group'>
                <label className='input-group-text'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='1x'/>
                </label>

                <input
                    ref={searchRef}
                    type='text'
                    className='form-control'
                    placeholder={placeholder}
                    onKeyDown={handleEnter}
                />
            </div>
        </>
    )
}

export default SearchInput
