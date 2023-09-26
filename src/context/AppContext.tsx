import React, { FC, createContext, useContext, useEffect, useState } from "react";
import { SelectedValue } from "../components/select-field/select-field.model";
import { MovieModel } from "../models";
import { MOVIES_LIST } from "../pages/home/mocks/movies-list.mock";

export interface AppContextState {
  moviesList: MovieModel[];
  selectedGenre: string;
  selectedSorting: SelectedValue;
  handleSortChange(prop: SelectedValue): void;
  handleGenreChange(prop: string): void;
}

export const GENRES_OPTIONS = ["all", "documentary", "comedy", "horror", "crime"];

export const SORT_OPTIONS: SelectedValue[] = [
  { label: "Release Date", value: "release_date" },
  { label: "Title", value: "title" },
];

const AppContext = createContext<AppContextState>({} as AppContextState);

export const AppContextProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [moviesList, setMoviesList] = useState<MovieModel[]>([]);
  const [selectedGenre, setSelectedGenre] = useState(GENRES_OPTIONS[0]);
  const [selectedSorting, setSelectedSorting] = useState<SelectedValue>(SORT_OPTIONS[0]);

  const handleGenreChange = (newValue: string) => setSelectedGenre(newValue);

  const handleSortChange = (newValue: SelectedValue) => setSelectedSorting(newValue);

  const sortGenreCompare = (a: MovieModel, b: MovieModel): number => {
    if (selectedSorting.value === 'title') {
      return (b.title || '').localeCompare(a.title || '');
    } else {
      return new Date(b.release_date || '').getTime() - new Date(a.release_date || '').getTime();
    }
  }

  useEffect(() => {
    const movies = structuredClone(MOVIES_LIST);

    if (selectedGenre === 'all') {
      return setMoviesList(movies.sort(sortGenreCompare));
    }

    return setMoviesList(
      movies
        .filter(movie => (movie.genres || []).some(genre => genre === selectedGenre))
        .sort(sortGenreCompare)
    );
  }, [selectedGenre, selectedSorting.value]);

  return (
    <AppContext.Provider value={{
      moviesList,
      selectedGenre,
      selectedSorting,
      handleSortChange,
      handleGenreChange,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);