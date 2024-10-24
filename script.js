const url = "https://ponyapi.net/v1/character/all"

async function getPonyCharacters() {
  const response = await fetch(url);
  const data = await response.json();
  const element = document.querySelector('.container')
  const character = data[1]
  element.innerHTML += `
  <div class="character">
      <h1 class="number">1</h1>
      <img src="https://vignette.wikia.nocookie.net/mlp/images/b/bc/Princess_Twilight_Sparkle_ID_S4E26.png/revision/latest?cb=20160207045127" alt="">
      <div>
          <h2>Twilight Sparkle</h2>
          <p>Ruler of Equestria (S9E26)\nFounder/leader of the Council of Friendship (S9E26)\nRuler of the Castle of Friendship (S4E26-S9E26)\nFounder/principal of the School of Friendship (S8E1-S9E20)\nStarlight Glimmer's teacher (S5E26-S7E1)\nGolden Oak Library librarian (seasons 1-4)\nPrincess Celestia's student (seasons 1-3)\nStudent at Celestia's School for Gifted Unicorns (formerly)</p>
      </div>
  </div>
  `
}
getPonyCharacters();                                                       