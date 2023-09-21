import { GenresEnum, MovieModel } from "../../../models";

export const MOVIES_LIST: MovieModel[] = [
  {
    title: "cat gatchi muchi",
    poster_path: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
    release_date: 1999,
    genres: [GenresEnum.Comedy, GenresEnum.Documentary],
    overview: `Cats, known for their independent and mysterious nature, have captivated human hearts for centuries. These enigmatic creatures exhibit a wide range of behaviors and personalities, from playful and affectionate to aloof and inscrutable.
    Cats are agile hunters, relying on their sharp senses to stalk prey silently. Their retractable claws and keen eyesight make them formidable predators. Yet, at home, they transform into cuddly companions, often purring contentedly as they curl up in your lap.
    These feline friends come in various breeds, each with its own unique characteristics and quirks. From the elegant Siamese to the fluffy Maine Coon, there's a cat for every preference.
    Cats also possess an innate sense of curiosity, often exploring their surroundings with an insatiable appetite for adventure. Their love for cardboard boxes and laser pointers is well-documented, providing endless amusement for their human counterparts.`,
    vote_average: 9,
    runtime: 125,
    id: "1",
  },
  {
    title: "2 cats looking on you",
    poster_path: "https://cdn2.thecatapi.com/images/H_UWbOfra.jpg",
    release_date: 2220,
    genres: [GenresEnum.Crime, GenresEnum.Horror],
    overview: `Cats, known for their independent and mysterious nature, have captivated human hearts for centuries. These enigmatic creatures exhibit a wide range of behaviors and personalities, from playful and affectionate to aloof and inscrutable.
    Cats also possess an innate sense of curiosity, often exploring their surroundings with an insatiable appetite for adventure. Their love for cardboard boxes and laser pointers is well-documented, providing endless amusement for their human counterparts.`,
    vote_average: 7,
    runtime: 50,
    id: "2",
  },
  {
    title: "cat thief",
    poster_path:
      "https://25.media.tumblr.com/tumblr_m1yuqjfdy31qejbiro1_500.jpg",
    release_date: 2004,
    genres: [GenresEnum.Comedy],
    overview: `Cats, known for their independent and mysterious nature, have captivated human hearts for centuries. These enigmatic creatures exhibit a wide range of behaviors and personalities, from playful and affectionate to aloof and inscrutable.
    Cats are agile hunters, relying on their sharp senses to stalk prey silently. Their retractable claws and keen eyesight make them formidable predators. Yet, at home, they transform into cuddly companions, often purring contentedly as they curl up in your lap.
    Cats also possess an innate sense of curiosity, often exploring their surroundings with an insatiable appetite for adventure. Their love for cardboard boxes and laser pointers is well-documented, providing endless amusement for their human counterparts.`,
    vote_average: 2,
    runtime: 60,
    id: "3",
  },
];
