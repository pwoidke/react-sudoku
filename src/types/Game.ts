import { Board } from './Board';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Game {
  puzzle: Board;
  difficulty: Difficulty;
}
