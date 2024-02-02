import { Circle, HelpCircle } from 'react-feather';

const Card = ({ character, id}) => {

    const getCharacterStatus = () => {
       switch(character.status){
        case 'Alive': 
          return <Circle color="green" size={15} fill="green" className='inline'/>;
        case 'Dead':
          return <Circle color="red" size={15} fill="red" className='inline'/>;
        default:
          return <HelpCircle color="gray" size={15} fill="gray" className='inline'/>;
       }
      };

    return <li key={id} className="border-2 border-black rounded-md p-2 mt-2  w-64">
       
        <h1 className="text-xl font-bold"> <i> {getCharacterStatus()}</i> {character.name} </h1>
        <img src={character.image} alt={character.name} className="my-2" />
        <span className="text-sm bg-teal-200 rounded-md p-1">{character.species}</span>
        
        
    </li>
}

export default Card