import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import useData from "./useData";


// Help us shaping our data in the form of our interfaces (type) props to pass data from parent components to child
export interface Genre {
  id: number;
  name: string;
  image_background:string;
  games:[];
}

export interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => useData<Genre>('genres')

export default useGenres;
