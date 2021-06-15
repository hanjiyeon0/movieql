export let movies = [
  {
    id: 0,
    name: "Sandy",
    score: 26,
  },
  {
    id: 1,
    name: "Hocheeol",
    score: 29,
  },
  {
    id: 2,
    name: "Jeff",
    score: 26,
  },
  {
    id: 3,
    name: "Taek",
    score: 27,
  },
  {
    id: 4,
    name: "Karly",
    score: 28,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => id === movie.id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
