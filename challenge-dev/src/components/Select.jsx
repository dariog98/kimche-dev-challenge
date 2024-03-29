const Select = ({ options, value, handleOnChange }) => {
    return (
        <div className='input-group'>
            <select className='form-select' value={value} onChange={handleOnChange}>
                {options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
            </select>
        </div>
    )
}

export default Select