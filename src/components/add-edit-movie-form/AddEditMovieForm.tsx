import "./add-edit-movie-form.css";
import { AddEditMovieFormProps } from "./add-edit-movie-form-props.interface";
import { FormEvent, useState } from "react";
import { SelectInput } from "../select-input/SelectInput";
import {
  GENRES_LIST,
  INITIAL_FORM_STATE,
} from "./add-edit-movie-form.constants";
import { MovieModel } from "../../models";
import { MovieFormModel } from "./add-edit-movie-form.interface";

export function AddEditMovieForm({ movie, submitForm }: AddEditMovieFormProps) {
  function mapMovieToFormState(movie: MovieModel = {}): MovieFormModel {
    return {
      ...movie,
      genres: GENRES_LIST.filter((genre) =>
        (movie.genres ?? []).includes(genre.value)
      ),
    };
  }

  const initialFormState = mapMovieToFormState(movie) || {
    ...INITIAL_FORM_STATE,
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  function handleChange(event: any) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(formData);
    submitForm(formData as MovieModel);
  }

  function handleOnReset() {
    setFormData({ ...INITIAL_FORM_STATE });
  }

  return (
    <form className="movie-form" onSubmit={handleOnSubmit}>
      <div className="form-field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          required
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="releaseDate">Release Date</label>
        <input
          type="date"
          id="releaseDate"
          name="release_date"
          placeholder="Select Date"
          value={formData.release_date}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="movieUrl">Movie Url</label>
        <input
          type="text"
          id="movieUrl"
          name="poster_path"
          placeholder="https://"
          value={formData.poster_path}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="vote_average"
          placeholder="0.0"
          max={10}
          min={0}
          value={formData.vote_average}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="genre">Genre</label>
        <SelectInput
          placeholder="Select Genre"
          options={GENRES_LIST}
          selectedOptions={formData.genres}
          onSelectionChange={(selectedOptions) =>
            handleChange({
              target: { name: "genres", value: selectedOptions },
            })
          }
        />
      </div>

      <div className="form-field">
        <label htmlFor="runtime">Runtime</label>
        <input
          type="number"
          id="runtime"
          name="runtime"
          placeholder="Minutes"
          value={formData.runtime}
          onChange={handleChange}
        />
      </div>

      <div className="form-field overview-field">
        <label htmlFor="overview">Overview</label>
        <textarea
          id="overview"
          name="overview"
          placeholder="Movie Description"
          rows={7}
          value={formData.overview}
          onChange={handleChange}
        />
      </div>

      <div className="movie-form-actions">
        <button
          type="button"
          className="stroked-button"
          onClick={handleOnReset}
        >
          Reset
        </button>
        <button type="submit" className="flat-button">
          Submit
        </button>
      </div>
    </form>
  );
}
