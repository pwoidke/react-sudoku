import { Game } from '../types/Game';
import { emptyBoard } from '../utils/index';

export async function getNewGame(difficulty: string): Promise<Game> {
  try {
    const response = await fetch(
      `https://vast-chamber-17969.herokuapp.com/generate?difficulty=${difficulty}`
    );
    return await response.json();
  } catch (error) {
    return { difficulty: 'error', puzzle: emptyBoard };
  }
}
