const CharacterItem = ({ data, handleOnClick }) => {
    return (
        <div className='character-item-box bg-secondary' onClick={handleOnClick}>
            <img className='character-item-image' src={data.image} alt={data.name}/>
            <div className='character-item-data text-light fw-bold d-flex justify-content-center p-2'>
                {data.name}
            </div>
        </div>
    )
}

const CharactersGrid = ({ characters, handleOpenModal }) => {
    return (
        <div className='characters-grid'>
            {
                characters.map(character =>
                    <CharacterItem key={character.id} data={character} handleOnClick={() => handleOpenModal(character)}/>
                )
            }
        </div>
    )
}

export default CharactersGrid