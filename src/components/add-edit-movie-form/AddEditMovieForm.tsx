import "./add-edit-movie-form.css";
import { AddEditMovieFormProps } from "./add-edit-movie-form-props.interface";
import { SelectInput } from "../select-input/SelectInput";
import {
  GENRES_LIST,
  INITIAL_FORM_STATE,
} from "./add-edit-movie-form.constants";
import { MovieModel } from "../../models";
import { MovieFormModel } from "./add-edit-movie-form.interface";
import { useFormik } from "formik";
import * as Yup from "yup";

export function AddEditMovieForm({ movie, submitForm }: AddEditMovieFormProps) {
  function mapMovieToFormState(movie: MovieModel = {}): MovieFormModel {
    return {
      ...movie,
      genres: GENRES_LIST.filter((genre) =>
        (movie.genres ?? []).includes(genre.value)
      ),
    };
  }

  // no need ||
  const initialFormState = mapMovieToFormState(movie) || {
    ...INITIAL_FORM_STATE,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    release_date: Yup.date().required(),
    poster_path: Yup.string()
      .required()
      .matches(/https|http/, "Invalid Link"),
    vote_average: Yup.number().min(0).max(10),
    runtime: Yup.number(),
    overview: Yup.string().max(50),
  });

  const formik = useFormik({
    initialValues: initialFormState,
    onSubmit: (values) => {
      submitForm(values as MovieModel);
    },
    validationSchema,
  });

  const isSaveDisabled = !!Object.keys(formik.errors).length;

  return (
    <form className="movie-form" onSubmit={formik.handleSubmit}>
      <div className="form-field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <p className="error-placeholder">{formik.errors?.title}</p>
      </div>

      <div className="form-field">
        <label htmlFor="releaseDate">Release Date</label>
        <input
          type="date"
          id="releaseDate"
          name="release_date"
          placeholder="Select Date"
          value={formik.values.release_date}
          onChange={formik.handleChange}
        />
        <p className="error-placeholder">{formik.errors?.release_date}</p>
      </div>

      <div className="form-field">
        <label htmlFor="movieUrl">Movie Url</label>
        <input
          type="text"
          id="movieUrl"
          name="poster_path"
          placeholder="https://"
          value={formik.values.poster_path}
          onChange={formik.handleChange}
        />
        <p className="error-placeholder">{formik.errors?.poster_path}</p>
      </div>

      <div className="form-field">
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="vote_average"
          placeholder="0.0"
          value={formik.values.vote_average}
          onChange={formik.handleChange}
        />
        <p className="error-placeholder">{formik.errors?.vote_average}</p>
      </div>

      <div className="form-field">
        <label htmlFor="genre">Genre</label>
        <SelectInput
          placeholder="Select Genre"
          options={GENRES_LIST}
          selectedOptions={formik.values.genres}
          onSelectionChange={(selectedOptions) =>
            formik.handleChange({
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
          value={formik.values.runtime}
          onChange={formik.handleChange}
        />
      </div>

      <div className="form-field overview-field">
        <label htmlFor="overview">Overview</label>
        <textarea
          id="overview"
          name="overview"
          placeholder="Movie Description"
          rows={7}
          value={formik.values.overview}
          onChange={formik.handleChange}
        />
        <p className="error-placeholder">{formik.errors?.overview}</p>
      </div>

      <div className="movie-form-actions">
        <button
          type="button"
          className="stroked-button"
          onClick={() => formik.resetForm()}
        >
          Reset
        </button>
        <button
          type="button"
          className={`flat-button ${isSaveDisabled && "disabled-button"}`}
          disabled={isSaveDisabled}
          onClick={formik.submitForm}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
