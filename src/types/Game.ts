export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Game {
  difficulty: Difficulty;
  puzzle: string;
}
