import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { SelectedValue } from "../components/select-field/select-field.model";
import { GenresEnum, MovieModel } from "../models";
import { MoviesApiService } from "../services/movies-api.service";

export interface AppContextState {
  moviesList: MovieModel[];
  selectedGenre: string;
  selectedSorting: SelectedValue;
  handleSortChange(prop: SelectedValue): void;
  handleGenreChange(prop: string): void;
  handleSearchChange(prop: string): void;
}

export const GENRES_OPTIONS = Object.values(GenresEnum);

export const SORT_OPTIONS: SelectedValue[] = [
  { label: "Release Date", value: "release_date" },
  { label: "Title", value: "title" },
];

const AppContext = createContext<AppContextState>({} as AppContextState);

export const AppContextProvider: FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [moviesList, setMoviesList] = useState<MovieModel[]>([]);
  const [selectedGenre, setSelectedGenre] = useState(GENRES_OPTIONS[0]);
  const [selectedSorting, setSelectedSorting] = useState<SelectedValue>(
    SORT_OPTIONS[0]
  );

  const handleSearchChange = (newValue: string) => setSearchValue(newValue);

  const handleGenreChange = (newValue: GenresEnum) =>
    setSelectedGenre(newValue);

  const handleSortChange = (newValue: SelectedValue) =>
    setSelectedSorting(newValue);

  useEffect(() => {
    async function getMovies() {
      const moviesResponse = await MoviesApiService.get({
        search: searchValue,
        filter: [selectedGenre],
        sortBy: selectedSorting.value,
      });

      const movies = moviesResponse.data || [];

      return setMoviesList(movies);
    }

    getMovies();
  }, [selectedGenre, selectedSorting.value, searchValue]);

  return (
    <AppContext.Provider
      value={{
        moviesList,
        selectedGenre,
        selectedSorting,
        handleSortChange,
        handleGenreChange,
        handleSearchChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
