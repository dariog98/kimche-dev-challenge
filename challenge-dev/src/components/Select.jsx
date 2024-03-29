const Select = ({ options, defaultValue, handleOnChange }) => {
    return (
        <div>
            <select className='form-select' defaultValue={defaultValue} onChange={handleOnChange}>
                {options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
            </select>
        </div>
    )
}

export default Select