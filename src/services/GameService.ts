import { Difficulty, Game } from '../types';

import { environment } from '../environment';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3ea5b334eamshb48e51ac85d7f06p13eaf4jsnf9610d474885',
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
