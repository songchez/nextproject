import { useEffect, useState } from "react";

const API_KEY = "389703edfca69df91d0efaa71a7a0762";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <h1 className="active">Hello</h1>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
          }
        `}
      </style>
    </div>
  );
}
