import RickAndMortyLogo from '../RickAndMortyLogo'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='d-flex flex-column align-items-center'>
                    <RickAndMortyLogo/>
                </div>
            </div>
        </header>
    )
}

export default Header