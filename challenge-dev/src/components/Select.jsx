const Select = ({ label, options, value, handleOnChange }) => {
    return (
        <div>
            {label && <label className='form-label'>{label}</label>}
            <div className='input-group'>
                <select className='form-select' value={value} onChange={handleOnChange}>
                    {options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Select