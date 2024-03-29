import { CharactersGrid, Filters, Loading, Modal, NoCharactersFound, Pagination, RickAndMortyLogo } from '../components'
import { ALL_CHARACTERS } from '../constats/queries'
import { useCustomSearchParams, useModal } from '../hooks'
import { useQuery } from '@apollo/client'

const Init = () => {
    const { setParam, getParam, resetParams } = useCustomSearchParams()
    const { show, data: modalData, handleClose, handleOpen } = useModal()
    const name = getParam('name')
    const status = getParam('status')
    const species = getParam('species')
    const gender = getParam('gender')
    const page = getParam('page')

    const { data, loading } = useQuery(ALL_CHARACTERS, {
        variables: {
            name,
            status,
            species,
            gender,
            page: parseInt(page),
        }
    })

    const handleFilterParams = (key, value) => {
        setParam(key, value)
        setParam('page', 1)
    }

    return (
        <main className='vh-100 container'>
            <div className='py-4 d-flex flex-column gap-5 align-items-center'>
                <RickAndMortyLogo/>
                <Filters
                    setParam={handleFilterParams}
                    getParam={getParam}
                    resetParams={resetParams}
                />

                {
                    loading ?
                    <div className='flex-grow-1 my-5 d-flex justify-content-center align-items-center'>
                        <Loading/>
                    </div>
                    : data?.characters.results.length > 0
                        ? <>
                            <CharactersGrid
                                characters={data.characters.results}
                                handleOpenModal={handleOpen}
                            />
                            <Pagination
                                currentPage={page ? parseInt(page) : 1}
                                totalPages={data.characters.info.pages}
                                handlePage={(value) => setParam('page', value)}
                            />
                            <Modal
                                show={show}
                                data={modalData}
                                handleClose={handleClose}
                            />
                        </>
                        : <div className='flex-grow-1 my-5 d-flex justify-content-center align-items-center'>
                            <NoCharactersFound/>
                        </div>
                }
            </div>
        </main>
    )
}

export default Init
