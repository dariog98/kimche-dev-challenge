import { faArrowRotateBack } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import SearchInput from './SearchInput'
import Select from './Select'

const Filters = ({ setParam, getParam, resetParams }) => {
    const name = getParam('name')
    const status = getParam('status')
    const species = getParam('species')
    const gender = getParam('gender')

    return (
        <div className='w-100 d-flex flex-column gap-3'>
            <SearchInput
                placeholder='Type and press enter to search...'
                value={name}
                handleSearch={(value) => setParam('name', value)}
            />
            
            <div className='d-flex flex-wrap align-items-end gap-3'>
                <div className='flex-grow-1'>
                    <Select
                        label='Status'
                        name='status'
                        value={status ?? ''}
                        handleOnChange={({target}) => setParam('status', target.value)}
                        options={[
                            { value: '', label: 'All' },
                            { value: 'alive', label: 'Alive'},
                            { value: 'dead', label: 'Dead' },
                            { value: 'unknown', label: 'unknown'},
                        ]}
                    />
                </div>

                <div className='flex-grow-1'>
                    <Select
                        label='Species'
                        name='species'
                        value={species ?? ''}
                        handleOnChange={({target}) => setParam('species', target.value)}
                        options={[
                            { value: '', label: 'All' },
                            { value: 'Alien', label: 'Alien' },
                            { value: 'Animal', label: 'Animal' },
                            { value: 'Cronenberg', label: 'Cronenberg' },
                            { value: 'Disease', label: 'Disease' },
                            { value: 'Human', label: 'Human' },
                            { value: 'Humanoid', label: 'Humanoid' },
                            { value: 'Mythological Creature', label: 'Mythological Creature' },
                            { value: 'Poopybutthole', label: 'Poopybutthole' },
                            { value: 'Robot', label: 'Robot' },
                            { value: 'unknown', label: 'unknown' },
                        ]}
                    />
                </div>

                <div className='flex-grow-1'>
                    <Select
                        label='Gender'
                        name='gender'
                        value={gender ?? ''}
                        handleOnChange={({target}) => setParam('gender', target.value)}
                        options={[
                            { value: '', label: 'All' },
                            { value: 'Female', label: 'Female' },
                            { value: 'Male', label: 'Male' },
                            { value: 'Genderless', label: 'Genderless' },
                            { value: 'unknown', label: 'unknown'},
                        ]}
                    />
                </div>

                <div className='flex-grow-1'>
                    <Button
                        className='btn-primary w-100'
                        icon={faArrowRotateBack}
                        text='Reset filters'
                        handleOnClick={resetParams}
                    />
                </div>
            </div>
        </div>
    )
}

export default Filters