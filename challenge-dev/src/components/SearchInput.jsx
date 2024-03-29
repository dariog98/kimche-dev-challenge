import { useEffect, useRef } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchInput = ({ placeholder, handleSearch, value }) => {
    const searchRef = useRef()

    useEffect(() => {
        searchRef.current.value = value ?? ''
        searchRef.current.onsearch = () => {
            handleSearch(searchRef.current.value)
        }
    }, [value])

    return (
        <>
            <div className='input-group'>
                <label className='input-group-text'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='1x'/>
                </label>

                <input
                    ref={searchRef}
                    type='search'
                    className='form-control'
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}

export default SearchInput
