/* eslint-disable react/prop-types */

const Card = ({ character, id}) => {
    return <li key={id} className="border-2 rounded-md p-1 mt-2">
        <h1 className="text-xl font-bold">{character.name}</h1>
        <span className="text-sm bg-red-200 rounded-md p-1">{character.status}</span>
        <img src={character.image} alt={character.name} className="my-2"/>
        <span className="text-sm bg-red-200 rounded-md p-1">{character.species}</span>
        
        
    </li>
}

export default Card