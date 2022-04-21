const url =
	'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f2b6fa3e7455455ca9f75f999c380fc3';

const html = document.querySelector('body');

html.innerHTML += 'Loading..';

const getGames = async (key) => {
	try {
		const response = await fetch(key);

		const jsonResult = await response.json();

		const result = jsonResult.results;

		html.innerHTML = '';

		for (let i = 0; i < result.length; i++) {
			const rating = result[i].rating;
			const name = result[i].name;
			const tags = result[i].tags;

			if (i < 8) {
				html.innerHTML += `<div class="wrapper"><p>Name of the movie: ${name}</p><p>Rating: ${rating}</p><p>Tags: ${tags.length}</p></div>`;
			}
		}
	} catch (error) {
		html.innerHTML = displayError();
	}
};

getGames(url);
