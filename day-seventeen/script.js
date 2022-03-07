window.onload = () => {
  const MOVIE_LIST =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
  const MAIN = document.getElementById("main");

  fetch(MOVIE_LIST)
    .then((response) => response.json())
    .then((data) => fetchMovieList(data.results));

  function fetchMovieList(data) {
    console.log(data)
    const movieCards = (
      `${data.map((e) => {
        return `
          <div class="movie-card">
            <img src="${IMAGE_PATH + e.poster_path}" />
            <div class="title">
              <h2>${e.original_title}</h2>
              <p>${e.vote_average}</p>
            </div>
            <div class="overview">
              <p>${e.overview}</p>
            </div>
          </div>
        `;
        }).join("")}`
    );

    MAIN.innerHTML = movieCards;
  }
};
