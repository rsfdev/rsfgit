const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.full_name)
    });
}

it('gets a list of repositories names', () => {
  const url = 'https://api.github.com/users/tryber/repos';

  return getRepos(url).then(result => {
    expect(result).toContain('tryber/sd-01-week13-project-frontend-online-store-group-2');
    expect(result).toContain('tryber/sd-01-week12-movie-card-library-crud');
  });
});
