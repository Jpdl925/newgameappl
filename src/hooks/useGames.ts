import { GameQuery } from "../App";
import SortSelector from "../components/SortSelector";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Help us shaping our data in the form of our interfaces (type) props to pass data from parent components to child
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = (gameQuery:GameQuery) => useData<Game>('games',{params:{genres:gameQuery.genre?.id,parent_platforms:gameQuery.platform?.id,ordering:gameQuery.sortOrder,search:gameQuery.searchText}},[gameQuery])

export default useGames;