import "./index.css";
import styles from "./features/landingPage/styles.module.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MovieDetails, MovieDropDown } from "components";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  BoxOffice: string;
  imdbVotes: string;
  imdbRating: string;
  Awards: string;
  Metascore: string;
  rating: string;
  gross: boolean;
}
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [secondSearchTerm, setSecondSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [secondMovies, setSecondMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [secondSelectedMovie, setSecondSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setMovies([]);
      return;
    }
    axios
      .get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=d9835cc5`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchTerm]);

  useEffect(() => {
    if (secondSearchTerm.trim() === "") {
      setSecondMovies([]);
      return;
    }
    axios
      .get(`https://www.omdbapi.com/?s=${secondSearchTerm}&apikey=d9835cc5`)
      .then((response) => {
        if (response.data.Search) {
          setSecondMovies(response.data.Search);
        } else {
          setSecondMovies([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [secondSearchTerm]);

  const handleSelectedMovie = async (movie: Movie) => {
    const response = axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=d9835cc5`);
    const data = (await response).data;
    setSelectedMovie(data);
    setMovies([]);
    setSearchTerm("");
  };

  const handleSecondSelectedMovie = async (movie: Movie) => {
    const response = axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=d9835cc5`);
    const data = (await response).data;
    setSecondSelectedMovie(data);
    setSecondMovies([]);
    setSecondSearchTerm("");
  };
  const metaScore = typeof selectedMovie?.Metascore === "string" ? parseInt(selectedMovie?.Metascore) || 0 : undefined;
  const rate = typeof selectedMovie?.imdbRating === "string" ? parseFloat(selectedMovie?.imdbRating) || 0 : undefined;
  const gross = typeof selectedMovie?.BoxOffice === "string"
    ? parseInt(selectedMovie.BoxOffice.replace(/[$,]/g, "")) || 0
    : undefined;
  const vote = typeof selectedMovie?.imdbVotes === "string"
  ? parseInt(selectedMovie.imdbVotes.replace(",", "")) || 0
  : undefined;
  const match = selectedMovie?.Awards.match(/\d+/g);
  const intArray = match?.map((str) => parseInt(str, 10));
  let sum = 0;
  intArray?.forEach((num) => {
    sum += num;
  });
  
  const metaScore2 = typeof secondSelectedMovie?.Metascore === "string" ? parseInt(secondSelectedMovie?.Metascore) || 0 : undefined;
  const rate2 = typeof secondSelectedMovie?.imdbRating === "string" ? parseFloat(secondSelectedMovie?.imdbRating) || 0 : undefined;
  const gross2 = typeof secondSelectedMovie?.BoxOffice === "string"
    ? parseInt(secondSelectedMovie.BoxOffice.replace(/[$,]/g, "")) || 0
    : undefined;
  const vote2 = typeof secondSelectedMovie?.imdbVotes === "string"
  ? parseInt(secondSelectedMovie.imdbVotes.replace(",", "")) || 0
  : undefined;
  const match2 = secondSelectedMovie?.Awards.match(/\d+/g);
  const intArray2 = match2?.map((str) => parseInt(str, 10));
  let sum2 = 0;
  intArray2?.forEach((num) => {
    sum2 += num;
  });

  const boxOffice = typeof gross !== 'undefined' && typeof gross2 !== 'undefined' && gross < gross2 ? "red" : "green";
  const boxOffice2 = typeof gross !== 'undefined' && typeof gross2 !== 'undefined' && gross2 < gross ? "red" : "green";
  const awards = typeof sum !== 'undefined' && typeof sum2 !== 'undefined' && sum < sum2 ? "red" : "green";
  const awards2 = typeof sum !== 'undefined' && typeof sum2 !== 'undefined' && sum2 < sum ? "red" : "green";
  const votes = typeof vote !== 'undefined' && typeof vote2 !== 'undefined' && vote < vote2 ? "red" : "green";
  const votes2 = typeof vote !== 'undefined' && typeof vote2 !== 'undefined' && vote2 < vote ? "red" : "green";
  const score = typeof metaScore !== 'undefined' && typeof metaScore2 !== 'undefined' && metaScore < metaScore2 ? "red" : "green";
  const score2 = typeof metaScore !== 'undefined' && typeof metaScore2 !== 'undefined' && metaScore2 < metaScore ? "red" : "green";
  const rating = typeof rate !== 'undefined' && typeof rate2 !== 'undefined' && rate < rate2 ? "red" : "green";
  const rating2 = typeof rate !== 'undefined' && typeof rate2 !== 'undefined' && rate2 < rate ? "red" : "green";

 return (
    <div>
      <section className={`${styles.hero} ${styles.isPrimary} ${styles.isBold}`}>
        <div className={styles.heroBody}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              Movie Fight
              <span className={styles.icon}>
                <i className="fas fa-film"></i>
              </span>
            </h1>
          </div>
        </div>
      </section>
      <div className={styles.contain}>
        <div className={styles.autocomplete}></div>
        <div
          className={`${styles.column} ${styles.isHalf} ${styles.notification} ${styles.isPrimary} ${styles.tutorial}`}>
          <h1 className={styles.title}>Search For a Movie on Both Sides</h1>
          <p className={styles.subtitle}>We will tell you which is best!</p>
        </div>

        <div className={styles.search}>
          <div className={styles.section}>
            <label>
              <b>Search For a Movie</b>
            </label>
            <input
              className={styles.input}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
           />
           {searchTerm && (
              <MovieDropDown movies={movies} onSelectMovie={handleSelectedMovie} />
            )}
              <MovieDetails
                movie={selectedMovie}
                awards={awards}
                gross={boxOffice}
                metaScore={score}
                votes={votes}
                rating={rating}
              />
          </div>

          <div className={styles.section}>
            <label>
              <b>Search For a Movie</b>
            </label>
            <input
              className={styles.input}
              value={secondSearchTerm}
              onChange={(e) => setSecondSearchTerm(e.target.value)}
            />
            {secondSearchTerm && (
              <MovieDropDown movies={secondMovies} onSelectMovie={handleSecondSelectedMovie} />
            )}
            {secondSelectedMovie &&
              <MovieDetails
                movie={secondSelectedMovie}
                awards={awards2}
                gross={boxOffice2}
                votes={votes2}
                metaScore={score2}
                rating={rating2}
              />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
