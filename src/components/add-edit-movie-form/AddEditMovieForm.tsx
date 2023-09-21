import "./add-edit-movie-form.css";
import { AddEditMovieFormProps } from "./add-edit-movie-form-props.interface";
import { FormEvent, useState } from "react";

export function AddEditMovieForm({ movie }: AddEditMovieFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    releaseDate: "",
    movieUrl: "",
    rating: undefined,
    genre: "drama",
    runtime: "",
    overview: "",
  });

  function handleChange(event: any) {
    const { name, value } = event.target;
    console.log(name, value);

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(formData);
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
          name="releaseDate"
          placeholder="Select Date"
          value={formData.releaseDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="movieUrl">Movie Url</label>
        <input
          type="text"
          id="movieUrl"
          name="movieUrl"
          placeholder="https://"
          value={formData.movieUrl}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          placeholder="0.0"
          value={formData.rating}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="genre">Genre</label>
        <select
          id="genre"
          name="genre"
          placeholder="Select Genre"
          value={formData.genre}
          onChange={handleChange}
        >
          <option value="drama">Drama</option>
          <option value="comedy">Comedy</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="runtime">Runtime</label>
        <input
          type="text"
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
          value={formData.overview}
          onChange={handleChange}
        />
      </div>

      <div className="movie-form-actions">
        <button type="button" className="stroked-button">
          Reset
        </button>
        <button type="submit" className="flat-button">
          Submit
        </button>
      </div>
    </form>
  );
}
