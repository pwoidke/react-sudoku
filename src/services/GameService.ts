import { Difficulty, Game } from '../types';

import { environment } from '../environment';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'sudoku-generator1.p.rapidapi.com'
	}
};

export async function getNewGame(difficulty: Difficulty): Promise<Game> {
  const response = await fetch(
    `${environment.apiOptions.baseUrl}${environment.apiOptions.path}${environment.apiOptions.endpoints.generate}?difficulty=${difficulty}`,
    options
  );
  return await response.json();
}
