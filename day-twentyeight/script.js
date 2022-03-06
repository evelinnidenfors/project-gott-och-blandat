window.onload = () => {
  const FORM = document.getElementById("form");

  FORM.onsubmit = (event) => {
    event.preventDefault();
    const GITHUB_API = "https://api.github.com/users/";
    const SEARCH = document.getElementById("search").value;
    const INFORMATION = document.getElementById("information");

    Promise.all([
      fetch(GITHUB_API + SEARCH)
      .then((response) => response.json()),

      fetch(GITHUB_API + SEARCH + "/repos")
      .then((response) => response.json())
    ]).then(([userData, repoData]) => {
      createUserInformation(userData, repoData.slice(0, 5));
    })

    function createUserInformation(userData, repos) {
      if (userData.name !== undefined) {
        const contentFound = `<div class="card">
          <div>
            <img class="profile-image" src="${userData.avatar_url} alt="${userData.name}"/>
          </div>
          <div>
            <h2>${userData.name}</h2>
            <ul>
              <li>${userData.followers} Followers</li>
              <li>${userData.following} Following</li>
              <li>${userData.public_repos} Repos</li>
            </ul>
            <div class="repos">
              ${repos.map(e => {
                return `<a class="repository" href="${e.svn_url}" target="_blank">${e.name}</a>`
              }).join("")}
            </div>
          </div>
          </div>`;

        INFORMATION.innerHTML = contentFound;
      } else {
        const contentNotFound =
        `<div class="card"><h2>No user found</h2></div>`;

        INFORMATION.innerHTML = contentNotFound;
      }
    }



  };
};
