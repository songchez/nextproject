import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({results}) {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setMovies(results)
  }, [results]);

  const ocPushid =(id, title)=>{
    router.push({
      pathname: `/movies/${id}`,
      query: {
        title,
      },
    },
    `/movies/${id}`
    );
  }

  return (
    <div className="container">
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div onClick={()=>{ocPushid(movie.id, movie.original_title)}} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="posters"/>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 15px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(100, 0, 0, 0.4) 0px 6px 18px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 이걸 많이쓰면 쓸수록 서버사이드 랜더링이 되버린다. 자바스크립트가아니라 HTML이 되버리는 거다. 당신의 선택은?
export async function getServerSideProps(){
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props:{
      results,
    }
  }
}