export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export interface Location {
  name: string;
  url: string;
}

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
}
export interface ApiResponse {
  info: Info;
  results: Character[];
}

export interface LocationDetailed {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}
type Nullable<T> = T | null; 
