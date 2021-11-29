import { Game } from '../types/index';

import { environment } from '../environment';

export async function getNewGame(difficulty: string): Promise<any> {
  const response = await fetch(
    `${environment.apiOptions.baseUrl}${environment.apiOptions.endpoints.generate}?difficulty=${difficulty}`
  );
  return await response.json();
}
