import { Game } from '../types';

import { environment } from '../environment';

export async function getNewGame(difficulty: string): Promise<Game> {
  const response = await fetch(
    `${environment.apiOptions.baseUrl}${environment.apiOptions.endpoints.generate}?difficulty=${difficulty}`
  );
  return await response.json();
}
