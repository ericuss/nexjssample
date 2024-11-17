import CharacterComponent from "./components/shared/Character";
import { ApiResponse } from "./types/apiResponse";

export default async function Home() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data: ApiResponse = await response.json();

  return (
    <main className="home">
      <div className="flex gap-25">
        {data.results.map((x) => (
          <CharacterComponent key={x.id} character={x} />
        ))}
      </div>
    </main>
  );
}
