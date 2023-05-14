import returnPokemonArray from "./pokeapi.js";

const pokemons = returnPokemonArray();
const section = document.querySelector("#pokemonSelected");
let selectedPokemon;

document.getElementById("pokemon1").addEventListener("click", () => {
    choisePokemon(1);
    console.log(selectedPokemon);
    // setTimeout(() => {
    //     console.log("Delayed for 2 second.");
    // }, 2000);
    

})
document.getElementById("pokemon2").addEventListener("click", () => {
    choisePokemon(4);
    console.log(selectedPokemon);

})
document.getElementById("pokemon3").addEventListener("click", () => {
    choisePokemon(7);
    console.log(selectedPokemon);

})

function choisePokemon(pokemonIndex) {
    const indexOfPokemon = pokemonIndex - 1;
    const {pokemonName, pokemonId, pokemonHp, pokemonAttack, pokemonSpeed, pokemonTypes, pokemonSprite} = pokemons[indexOfPokemon];
    const pokemonType = pokemonTypes.map(type => type.type.name);
    selectedPokemon = pokemons[indexOfPokemon];

    const formattedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.substr(1, (pokemonName.length - 1))

    section.innerHTML = `<div class="card-pokemon">
    <h2>${formattedPokemonName}</h2>
    <p>
        <div>Attack: ${pokemonAttack}</div>
        <div>Speed: ${pokemonSpeed}</div>
        <div>HP: ${pokemonHp}</div>
        <div>Types: ${pokemonType[0]}</div>
    </p>
    <img src="${pokemonSprite}" alt="${pokemonName}">
    </div>`
    if (pokemonType.lentgh > 1) {
        section.innerHTML += `<div>Types: ${pokemonType[1]} </div>`
    }
}



function calcularDano(myPokemonType, enemyPokemonType, attack) {
    if (
      (myPokemonType === 'fire' && enemyPokemonType === 'grass') ||
      (myPokemonType === 'grass' && enemyPokemonType === 'water') ||
      (myPokemonType === 'water' && enemyPokemonType === 'fire') ||
      (myPokemonType === 'electric' && enemyPokemonType === 'water') ||
      (myPokemonType === 'fighting' && enemyPokemonType === 'normal') ||
      (myPokemonType === 'psychic' && enemyPokemonType === 'fighting') ||
      (myPokemonType === 'dragon' && enemyPokemonType === 'dragon') ||
      (myPokemonType === 'ghost' && enemyPokemonType === 'psychic') ||
      (myPokemonType === 'dark' && enemyPokemonType === 'ghost') ||
      (myPokemonType === 'ground' && enemyPokemonType === 'fire') ||
      (myPokemonType === 'ground' && enemyPokemonType === 'electric') ||
      (myPokemonType === 'poison' && enemyPokemonType === 'grass') ||
      (myPokemonType === 'poison' && enemyPokemonType === 'fairy') ||
      (myPokemonType === 'flying' && enemyPokemonType === 'fighting') ||
      (myPokemonType === 'bug' && enemyPokemonType === 'grass') ||
      (myPokemonType === 'rock' && enemyPokemonType === 'fire') ||
      (myPokemonType === 'rock' && enemyPokemonType === 'flying') ||
      (myPokemonType === 'steel' && enemyPokemonType === 'ice') ||
      (myPokemonType === 'steel' && enemyPokemonType === 'rock') ||
      (myPokemonType === 'fairy' && enemyPokemonType === 'dragon')
    ) {
      return attack * 2;
    } else if (
      (myPokemonType === 'fire' && enemyPokemonType === 'water') ||
      (myPokemonType === 'water' && enemyPokemonType === 'grass') ||
      (myPokemonType === 'grass' && enemyPokemonType === 'fire') ||
      (myPokemonType === 'electric' && enemyPokemonType === 'ground') ||
      (myPokemonType === 'fighting' && enemyPokemonType === 'flying') ||
      (myPokemonType === 'poison' && enemyPokemonType === 'ground') ||
      (myPokemonType === 'psychic' && enemyPokemonType === 'poison') ||
      (myPokemonType === 'bug' && enemyPokemonType === 'dark') ||
      (myPokemonType === 'ice' && enemyPokemonType === 'flying') ||
      (myPokemonType === 'dragon' && enemyPokemonType === 'ice') ||
      (myPokemonType === 'ghost' && enemyPokemonType === 'dark') ||
      (myPokemonType === 'steel' && enemyPokemonType === 'fire') ||
      (myPokemonType === 'steel' && enemyPokemonType === 'electric') ||
      (myPokemonType === 'steel' && enemyPokemonType === 'water') ||
      (myPokemonType === 'normal' && enemyPokemonType === 'ghost') ||
      (myPokemonType === 'dark' && enemyPokemonType === 'fighting')
    ) {
      return attack / 2;
    } else {
      return attack;
    }
  }

