import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import axios from "axios";

function MoviesListPage() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://hoblist.com/api/movieList",
          {
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const movie_data = response.data.result;
        setMoviesData(movie_data);
        setIsLoading(false);
        console.log(movie_data);
      } catch (error) {
        setIsLoading(false);
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [moviesData]);

  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });

    const formattedDay = day < 10 ? `0${day}` : day;

    return `${formattedDay} ${month}`;
  }

  return (
    <div className="h-full">
      <NavBar />
      <div className=" flex flex-col justify-center items-center">
        {isLoading ? (
          <p className="text-2xl text-white">Loading....</p>
        ) : (
          moviesData.map((movie) => (
            <div
              key={movie.id}
              className="w-2/4 border p-4 m-2 rounded-lg bg-white"
            >
              <div className="flex justify-center items-center ">
                <div className="m-2 flex flex-col p-4">
                  <BiSolidUpArrow size={40} color="gray" />
                  <p className="text-center text-2xl font-bold">
                    {movie.totalVoted}
                  </p>
                  <BiSolidDownArrow size={40} color="gray" />
                  <p>Votes</p>
                </div>
                <div className="m-2">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className=" rounded-md h-60 w-46"
                  />
                </div>
                <div className="flex-1 m-2">
                  <p className="text-2xl font-bold p-2">{movie.title}</p>
                  <p className="text-xl font-bold p-2">Genre: {movie.genre}</p>
                  <p className="text-xl font-bold p-2">
                    Director: {movie.director}
                  </p>
                  <p className="text-xl font-bold p-2">
                    Starring: {movie.stars}
                  </p>

                  <div className="flex items-center ">
                    <p className="text-xl font-bold p-2">
                      {movie.runTime} Mins
                    </p>{" "}
                    |<p className="text-xl font-bold p-2">{movie.language}</p> |
                    <p className="text-xl font-bold p-2">
                      {formatDate(movie.releasedDate)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-lg font-bold p-2 text-blue-500">
                      {movie.pageViews} views
                    </p>
                    |
                    <p className="text-lg font-bold p-2 text-blue-500">
                      Voted by {movie.totalVoted} people
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-2">
                <button className="bg-blue-500 p-4 rounded-md text-white font-bold text-xl">
                  Watch Trailer
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MoviesListPage;
