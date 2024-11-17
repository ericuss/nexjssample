import Image from 'next/image'
import { Character, LocationDetailed, Nullable } from "@/app/types/apiResponse";

interface DataProps {
  params: { id: string }; // Parámetros dinámicos
}

export default async function Detailed(bla: DataProps) {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/" + bla.params.id
  );
  const character: Character = await response.json();

  let responseOrigin: Nullable<Response> = null;

  if (character.origin?.url != null && character.origin?.url != '') {
    responseOrigin = await fetch(character.origin.url);
  }

  let origin: LocationDetailed = await responseOrigin?.json();
  let responseLocation: Nullable<Response> = null;

  if (character.location?.url != null && character.location?.url != '') {
    responseLocation = await fetch(character.location.url);
  }

  let location: LocationDetailed = await responseLocation?.json();
   

  const RenderLocation = (name: string, l: LocationDetailed) => {
    if(l == null) return;
    return (
      <div className="flex border-top">
        <label>{name}</label>
        <div className="flex flex-column">
          <div className="flex">
            <label>Id:</label>
            <p>{l.id}</p>
          </div>
          <div className="flex">
            <label>Name:</label>
            <p>{l.name}</p>
          </div>
          <div className="flex">
            <label>Dimensions:</label>
            <p>{l.dimension}</p>
          </div>
          <div className="flex">
            <label>Type:</label>
            <p>{l.type}</p>
          </div>
          <div className="flex">
            <label>Residents:</label>
            <p>{l.residents?.length}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="detailed flex">
      <div>
        <img src={character.image} width={250} alt={character.name} />
      </div>
      <div className="detailed-container">
        <h4>
          <b>{character.name}</b>
        </h4>
        <div className="flex">
          <label>Id:</label>
          <p>{character.id}</p>
        </div>
        <div className="flex">
          <label>Gender:</label>
          <p>{character.gender}</p>
        </div>
        <div className="flex">
          <label>Specie:</label>
          <p>{character.species}</p>
        </div>
        <div className="flex">
          <label>Status:</label>
          <p>{character.status}</p>
        </div>
        <div className="flex">
          <label>Type:</label>
          <p>{character.type}</p>
        </div>
        {RenderLocation("Location", location)}
        {RenderLocation("Origin", origin)}
      </div>
    </main>
  );
}
