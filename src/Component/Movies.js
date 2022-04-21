import PR from "./MovieList";
import Movie from "./Movie";
function Movies() {
  const Movies = PR;
  return (
    <div className="Movies" styel={{ color: "red" }}>
      {Movies.map((el) => (
        <Movie el={el} />
      ))}
    </div>
  );
}

export default Movies;