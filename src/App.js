import './App.css';

function App() {
  return (
    <div>
      <main>
        <h1>Escolha um pokemon:</h1>
        <button id="pokemon1" class="pokemonButton">Bulbasaur</button>
        <button id="pokemon2" class="pokemonButton">Charmander</button>
        <button id="pokemon3" class="pokemonButton">Squirtle</button>

        <h2>Você escolheu:</h2>
        <section id="pokemonSelected"></section>
      </main>
    </div>
  );
}

export default App;
