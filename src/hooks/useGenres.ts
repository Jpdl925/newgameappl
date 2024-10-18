
import { useQuery } from "@tanstack/react-query";
import useData from "./useData";
import { CACHE_KEY_GENRES } from "../constants";
import apiClient from "../services/apiClient";


// Help us shaping our data in the form of our interfaces (type) props to pass data from parent components to child
export interface Genre {
  id: number;
  name: string;
  image_background:string;
  games:[];
}

export interface FetchGenreResponse <T> {
  count: number;
  results: T[];
}

const useGenres = () => useQuery({
    queryKey:[CACHE_KEY_GENRES],
    queryFn: () => apiClient.get<FetchGenreResponse<Genre>>('/genres').then(res => res.data)
})

export default useGenres;
