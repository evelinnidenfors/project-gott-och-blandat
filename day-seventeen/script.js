window.onload = () => {
  const FORM = document.getElementById("form");
  const MOVIE_LIST =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
  const MAIN = document.getElementById("main");
  const SEARCH_LIST =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

  FORM.onsubmit = (event) => {
    const SEARCH_TERM = document.getElementById("search").value;

    event.preventDefault();
    fetch(SEARCH_LIST + SEARCH_TERM)
      .then((response) => response.json())
      .then((data) => fetchMovieList(data.results));
  };

  fetch(MOVIE_LIST)
    .then((response) => response.json())
    .then((data) => fetchMovieList(data.results));

  function fetchMovieList(data) {
    console.log(data);
    const movieCards = `${data
      .map((e) => {
        return `
          <div class="movie-card">
            <img src="${IMAGE_PATH + e.poster_path}" />
            <div class="title">
              <h2>${e.original_title}</h2>
              <div>
                <p>${e.vote_average}</p>
              </div>
            </div>
            <div class="overview">
              <p>${e.overview}</p>
            </div>
          </div>
        `;
      })
      .join("")}`;

    MAIN.innerHTML = movieCards;
  }
};
