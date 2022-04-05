import './styles.css'
import CharCard from './../Charcard'

const Characters = ({characterList, setCharacterList}) => {
    return (
        <div className='charactersList'>
            <h1 className='listTitle'>Meus personagens</h1>
            {characterList.map((character) => (
                <CharCard
                    key={character.id}
                    name={character.name}
                    species={character.species}
                    image={character.image}
                    className={character.status === 'Alive' ? 'cardBoxAlive' : 'cardBox' }
                />
            ))}
        </div>
    )
}
export default Characters