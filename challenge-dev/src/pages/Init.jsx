import { Button, Loading, Pagination, SearchInput, Select } from '../components'
import CharactersGrid from '../components/CharactersGrid'
import { ALL_CHARACTERS } from '../constats/queries'
import { useCustomSearchParams } from '../hooks'
import { useQuery } from '@apollo/client'

const Init = () => {
    const { setParam, getParam, resetParams } = useCustomSearchParams()
    const name = getParam('name')
    const page = getParam('page')
    const status = getParam('status')
    const species = getParam('species')
    const gender = getParam('gender')

    const { data, error, loading } = useQuery(ALL_CHARACTERS, {
        variables: {
            name,
            status,
            species,
            gender,
            page: parseInt(page),
        }
    })

    return (
        <main className='container'>
            <div className='my-4 d-flex flex-column gap-3 align-items-center'>
                <div className='d-flex flex-column gap-3'>
                    <SearchInput
                        placeholder='Search...'
                        value={name}
                        handleSearch={(value) => setParam('name', value)}
                    />
                    
                    <div className='d-flex flex-wrap gap-3'>
                        <Select
                            name='status'
                            defaultValue={status ?? ''}
                            handleOnChange={({target}) => setParam('status', target.value)}
                            options={[
                                { value: '', label: 'All' },
                                { value: 'alive', label: 'Alive'},
                                { value: 'dead', label: 'Dead' },
                                { value: 'unknown', label: 'unknown'},
                            ]}
                        />
                        
                        <Select
                            name='species'
                            defaultValue={species ?? ''}
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

                        <Select
                            name='gender'
                            defaultValue={gender ?? ''}
                            handleOnChange={({target}) => setParam('gender', target.value)}
                            options={[
                                { value: '', label: 'All' },
                                { value: 'Female', label: 'Female' },
                                { value: 'Male', label: 'Male' },
                                { value: 'Genderless', label: 'Genderless' },
                                { value: 'unknown', label: 'unknown'},
                            ]}
                        />

                        <Button
                            className='btn-primary'
                            text='Reset filters'
                            handleOnClick={resetParams}
                        />
                    </div>
                </div>

                {
                    loading ?
                    <Loading/>
                    : data?.characters.results.length > 0
                        ? <>
                        <CharactersGrid characters={data.characters.results}/>
                        <Pagination currentPage={page ? parseInt(page) : 1} totalPages={data.characters.info.pages} handlePage={(value) => setParam('page', value)}/>
                        </>
                        : <div>No characters was found</div>
                }
            </div>
        </main>
    )
}

export default Init
