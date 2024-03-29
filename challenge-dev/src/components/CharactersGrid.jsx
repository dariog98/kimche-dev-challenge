const CharactersGrid = ({ characters }) => {
    return (
        <div className='characters-grid'>
            {
                characters.map(character =>
                    <div key={character.id} className='card overflow-hidden position-relative'>
                        <img src={character.image} alt={character.name}/>
                        <div className='position-absolute text-light d-flex justify-content-center p-2' style={{ backgroundColor: '#00000090', bottom: 0, left: 0, right: 0 }}>
                            {character.name}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CharactersGrid