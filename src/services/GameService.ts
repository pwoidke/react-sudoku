import { Game } from '../types/Game';

export async function getNewGame(difficulty: string): Promise<Game | never[]> {
  try {
    const response = await fetch(
      `https://vast-chamber-17969.herokuapp.com/generate?difficulty=${difficulty}`
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}
