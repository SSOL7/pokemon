const pokedex = document.getElementById('pokedex');

console.log(pokedex);

const fetch_pokemon = async () => {

    const promises = [];
    for (let i = 1; i <= 150; i++) {
        console.log('fetching pokemon');
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
    const pokemonHTMLString = pokemon.map(pokeman => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `).join('');
    pokedex.innerHTML = pokemonHTMLString;
}

fetch_pokemon();