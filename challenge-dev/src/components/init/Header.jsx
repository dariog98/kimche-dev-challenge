import RickAndMortyLogo from '../RickAndMortyLogo'

const Header = () => {
    return (
        <header className='mt-3'>
            <div className='container'>
                <div className='d-flex flex-column align-items-center'>
                    <RickAndMortyLogo/>
                </div>
            </div>
        </header>
    )
}

export default Header