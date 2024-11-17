import Image from "next/image";
import { Character } from "../../types/apiResponse";

interface DataProps {
  character: Character;
}

export default async function CharacterComponent({ character }: DataProps) {

  return (
    <div className="card">
      <img
        src={character.image}
        width={250}
        alt={character.name}
      />
      <div className="container">
        <h4>
          <b>{character.name}</b>
        </h4>
        <p>{character.location.name}</p>
        <a href={'/detailed/' + character.id}>Details</a>
      </div>
    </div>
  );
}
