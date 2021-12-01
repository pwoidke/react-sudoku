import { Game } from '../types/index';

import { environment } from '../environment';

import axios from 'axios';

export async function getNewGame(difficulty: string): Promise<Game> {
  const response = await axios.get(
    `${environment.apiOptions.baseUrl}${environment.apiOptions.endpoints.generate}?difficulty=${difficulty}`
  );
  console.log('response  ', response);
  return response.data;
}
