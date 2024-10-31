const url = "https://ponyapi.net/v1/character/all"

async function getPonyCharacters() {
  const response = await fetch(url);
  const data = await response.json();
  const element = document.querySelector('.container')
  for (const character of data.data) {
    element.innerHTML += `
      <div class="character">
          <h1 class="title">${character.id}</h1>
          <img src="${character.image}" alt="">
        <div>
          <h2>${character.name}</h2>
          <p>${character.occupation}</p>
        </div>
      </div>
  `
  }

    

}
getPonyCharacters();                                                       