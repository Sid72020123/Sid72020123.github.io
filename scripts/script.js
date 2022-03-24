'use strict';

function getUserProfileData(username) {
  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      displayUserProfileData(response);
    })
    .catch((error) => console.log(error));
}
function getUserRepoData(username) {
  const url = `https://api.github.com/users/${username}/repos`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      displayUserRepoData(response);
    })
    .catch((error) => console.log(error));
}

function displayUserProfileData(data) {
  let contents = [
    'bio',
    'public_repos',
    'public_gists',
    'followers',
    'following',
  ];
  let text = ['Bio', 'Public Repos', 'Public Gists', 'Followers', 'Following'];
  let icons_code = [
    '<i class="fa-solid fa-book"></i>',
    '<i class="fa-solid fa-folder"></i>',
    '<i class="fa-solid fa-bars"></i>',
    '<i class="fa-solid fa-user"></i>',
    '<i class="fa-solid fa-user"></i>',
  ];
  let code = '';
  for (let index = 0; index < contents.length; index++) {
    code += `<span class="text-yellow">${
      icons_code[index]
    } </span></span><span class="text-blue">${text[index]}: </span> ${
      data[contents[index]]
    }<br>`;
  }
  document.querySelector('#profile_data').innerHTML = code;
}

function displayUserRepoData(data) {
  let code = '';
  let contents = [
    'name',
    'html_url',
    'description',
    'stargazers_count',
    'watchers_count',
    'language',
    'forks_count',
    'open_issues_count',
  ];
  let text = [
    'Name',
    'URL',
    'Description',
    'Stars',
    'Watchers Count',
    'Language',
    'Forks',
    'Open Issues',
  ];
  let icons = [
    '<i class="fa-solid fa-pencil"></i>',
    '<i class="fa-solid fa-link"></i>',
    '<i class="fa-solid fa-book-open"></i>',
    '<i class="fa-solid fa-star"></i>',
    '<i class="fa-solid fa-eye"></i>',
    '<i class="fa-solid fa-code"></i>',
    '<i class="fa-solid fa-code-fork"></i>',
    '<i class="fa-solid fa-bug"></i>',
  ];
  for (let index = 0; index < data.length; index++) {
    if (data[index]['fork'] === false && data[index]['private'] === false) {
      let d = data[index];
      code += '<div class="repo_card">';
      for (let i = 0; i < contents.length; i++) {
        if (contents[i] === 'html_url') {
          code += `${icons[i]} <span class="text-blue">${
            text[i]
          }: </span> <a href="${d[contents[i]]}" target="_blank" class="link">${
            d[contents[i]]
          }</a> <br><br>`;
        } else {
          code += `${icons[i]} <span class="text-blue">${text[i]}: </span> ${
            d[contents[i]]
          } <br><br>`;
        }
      }
      code += '</div>';
    }
  }
  document.querySelector('#repos_data').innerHTML = code;
}
getUserProfileData('Sid72020123');
getUserRepoData('Sid72020123');
