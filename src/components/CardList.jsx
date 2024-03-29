/* eslint-disable react/prop-types */

import Card from "./Card"

const CardList = ({characters}) => {
    const createCard = () => {
        return characters.map((character, id) => {
            return <Card key={id} character={character}/>
        })
    }
    return  <ul className="flex flex-wrap gap-2">{characters && createCard()}</ul>
}

export default CardList