const CharactersGrid = ({ characters, handleOpenModal }) => {
    return (
        <div className='w-100 characters-grid'>
            {
                characters.map(character =>
                    <div key={character.id} className='card position-relative rounded-4 character-item-box' onClick={() => handleOpenModal(character)}>
                        <img className='character-item-image' src={character.image} alt={character.name}/>
                        <div className='character-item-data text-light fw-bold d-flex justify-content-center p-2'>
                            {character.name}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CharactersGrid