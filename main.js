const pokedex = document.getElementById('pokedex');
var generateBtn = document.getElementById('thirdgeneration');
generateBtn.addEventListener('click', third_generation);

const third = document.getElementById('second');
var generateBtn = document.getElementById('secondgeneration');
generateBtn.addEventListener('click', second_generation);
const second = document.getElementById('second');


const fetch_pokemon = async () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()));
    }

        Promise.all(promises).then(results => {
            const pokemon = results.map(data  => ({
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map(type => type.type.name).join(', ')
            }));
            display_pokemon(pokemon);
        });
    }

function second_generation() {
    const promises = [];
    for (let i = 152; i <= 252; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()));
    }

        Promise.all(promises).then(results => {
            const pokemon = results.map(data  => ({
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map(type => type.type.name).join(', ')
            }));
            display_pokemon(pokemon);
        });
    }

function third_generation() {
    const promises = [];
    for (let i = 251; i <= 386; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()));
    }

        Promise.all(promises).then(results => {
            const pokemon = results.map(data  => ({
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map(type => type.type.name).join(', ')
            }));
            display_pokemon(pokemon);
        });
    }

const display_pokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon.map(pokemon => `
        <li class="card">
            <img class="card-image" src="${pokemon.image}"/>
            <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
            <p class="card-subtitle">Type: ${pokemon.type}</p>
        </li>
    `).join('');
    pokedex.innerHTML = pokemonHTMLString;
}

// search bar
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
    const promises = [];
    for (let i = 1; i <= 386; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()));
    }

        Promise.all(promises).then(results => {
            const pokemon = results.map(data  => ({
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map(type => type.type.name).join(', ')
            }));
            const searchValue = searchInput.value;
            const filteredPokemon = pokemon.filter(pokemon => {
                return pokemon.name.includes(searchValue);
            });
            display_pokemon(filteredPokemon);
        });
    });

fetch_pokemon();