let limit = 9;
let offset = 0;
const pokeapi_url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

let pokemons = [];

fetch(pokeapi_url)
  .then(response => response.json())
  .then(data => {
    let pokemonsArray = data.results;
    let promises = [];
    for (const pokemon of pokemonsArray) {
      let promise = fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {
          let pokemonData = {
            pokemonName: data.name,
            pokemonId: data.id,
            pokemonHp: data.stats[0].base_stat,
            pokemonAttack: data.stats[1].base_stat,
            pokemonSpeed: data.stats[5].base_stat,
            pokemonTypes: data.types,
            pokemonSprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`
          }
          return pokemonData;
        })
      promises.push(promise);
    }
    Promise.all(promises)
      .then(pokemonsData => {
        for (const pokemonData of pokemonsData) {
          pokemons.push(pokemonData);
          // console.log(`O pokemon ${pokemonData.pokemonName}, que é do tipo ${pokemonData.pokemonTypes[0].type.name} e, com o id ${pokemonData.pokemonId} tem ${pokemonData.pokemonHp} de vida, ${pokemonData.pokemonAttack} de ataque e ${pokemonData.pokemonSpeed} de velocidade`);
        }
      })
      .catch(error => {
        console.log(error);
      });
  })
  .catch(error => {
    console.log(error);
  });
  
export default function returnPokemonArray () {
    return pokemons;
}
