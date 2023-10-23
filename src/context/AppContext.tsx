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
import { useSearchParams } from "react-router-dom";

export interface AppContextState {
  moviesList: MovieModel[];
  selectedGenre: string;
  search: string;
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
  const [moviesList, setMoviesList] = useState<MovieModel[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchState, setSearchState] = useState({
    search: searchParams.get("search") ?? "",
    filter: searchParams.get("filter") ?? GENRES_OPTIONS[0],
    sortBy:
      SORT_OPTIONS.find(
        (option) => option.value === searchParams.get("sortBy")
      ) ?? SORT_OPTIONS[0],
  });

  const handleSearchChange = (newValue: string) =>
    setSearchState((prevState) => ({ ...prevState, search: newValue }));

  const handleGenreChange = (newValue: GenresEnum) =>
    setSearchState((prevState) => ({ ...prevState, filter: newValue }));

  const handleSortChange = (newValue: SelectedValue) =>
    setSearchState((prevState) => ({ ...prevState, sortBy: newValue }));

  useEffect(() => {
    setSearchParams({
      search: searchState.search,
      filter: searchState.filter,
      sortBy: searchState.sortBy?.value,
    });
  }, [searchState, setSearchParams]);

  useEffect(() => {
    async function getMovies() {
      const search: string = searchParams.get("search") ?? "";
      const filter: GenresEnum[] = [searchParams.get("filter")] as GenresEnum[];
      const sortBy: string =
        SORT_OPTIONS.find(
          (option) => option.value === searchParams.get("sortBy")
        )?.value ?? "";

      const moviesResponse = await MoviesApiService.get({
        search,
        filter,
        sortBy,
      });

      const movies = moviesResponse.data || [];

      return setMoviesList(movies);
    }

    getMovies();
  }, [searchParams]);

  return (
    <AppContext.Provider
      value={{
        moviesList,
        search: searchParams.get("search") ?? "",
        selectedGenre: searchParams.get("filter") ?? GENRES_OPTIONS[0],
        selectedSorting:
          SORT_OPTIONS.find(
            (option) => option.value === searchParams.get("sortBy")
          ) ?? SORT_OPTIONS[0],
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
