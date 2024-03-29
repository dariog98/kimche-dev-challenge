import logo from '../assets/RickandMorty.svg'

const RickAndMortyLogo = () => {
    return (
        <div>
            <img src={logo} className='w-100' style={{ maxWidth: '500px' }}/>
        </div>
    )
}

export default RickAndMortyLogo