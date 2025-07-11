const movie = {
  title: "케이팝 데몬 헌터스",
  director: "매기 강",
  year: 2025,
  genre: "Animation",
};

const movies = [
  {
    title: "",
    director: "",
    year: 2025,
    genre: "",
  },
  {
    title: "",
    director: "",
    year: 2025,
    genre: "",
  },
];

function applyDefaults(movie) {
  return {
    title: movie.title || "Untitled",
    director: movie.director || "Unknown",
    year: movie.year || "Unknown",
    genre: movie.genre || "Genreless",
  };
}

function addMovies(index, ...newMovies) {
  const validMovies = newMovies.map(applyDefaults);
  movies.splice(index, 0, ...validMovies);
}

addMovies(0, movie, movie, movie, movie);

function printMovies(arr) {
  console.log("🎬 Movie Collection:");
  for (let i = 0; i < arr.length; i++) {
    const m = arr[i];
    console.log(
      `${i + 1}. Title: ${m.title}, Director: ${m.director}, Year: ${
        m.year
      }, Genre: ${m.genre}`
    );
  }
  console.log(`Total Movies: ${arr.length}`);
}

printMovies(movies);
