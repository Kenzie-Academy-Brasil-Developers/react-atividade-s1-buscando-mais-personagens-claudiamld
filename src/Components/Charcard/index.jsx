import './styles.css'

const CharCard = ({id, name, image, species, className}) => {
    return (
        <div className={className}>
            <img src={image} alt={name} />
            <h2 className="cardTitle">Nome: {name}</h2>
            <h3 className='cardSpecie'>Espécie: {species}</h3>
        </div>
    )
}

export default CharCard