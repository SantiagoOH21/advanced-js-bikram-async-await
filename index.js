//DESARROLLA AQUI TUS SOLUCIONES

async function getImageAndName(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await response.json();
  const name = data.name;
  const img = data.sprites.front_default;
  return { name, img };
}

async function getRandomPokemon() {
  const pokemonNumber = Math.floor(Math.random() * 1026) + 1;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
  );
  return await response.json();
}

async function printImageAndName() {
  return `
  <section>
  <img src="url de imagen" alt="nombre del pokemon">
  <h1>Nombre del pokemon</h1>
  </section>`;
}

async function getRandomDogImage() {
  const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const dogImage = await response.json();
  const dogUrl = dogImage.message;
  return dogUrl;
}

async function getRandomPokemonImage() {
  const pokemonNumber = Math.floor(Math.random() * 1026) + 1;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
  );
  const dataPokemon = await response.json();
  return dataPokemon.sprites.front_default;
}

async function printPugVsPikachu() {
  const resPikachu = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
  const dataPikachu = await resPikachu.json();
  const pikachuImg = dataPikachu.sprites.front_default;

  const resPug = await fetch(`https://dog.ceo/api/breed/pug/images/random`);
  const dataPug = await resPug.json();
  const pugImage = dataPug.message;
  return { pugImage, pikachuImg };
}

async function getRandomCharacter() {
  const characterNumber = Math.floor(Math.random() * 826) + 1;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterNumber}`
  );
  return await response.json();
}

async function getRandomCharacterInfo() {
  const characterNumber = Math.floor(Math.random() * 826) + 1;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterNumber}`
  );
  const data = await response.json();
  const img = data.image;
  const name = data.name;
  const episodes = data.episode;

  const resFirstEpisode = await fetch(`${episodes[0]}`);
  const dataFirstEpisode = await resFirstEpisode.json();
  const firstEpisode = dataFirstEpisode.name;
  const dateEpisode = dataFirstEpisode.air_date;

  return { img, name, episodes, firstEpisode, dateEpisode };
}
