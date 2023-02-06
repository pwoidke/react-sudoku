import { render } from '@testing-library/react';
import { toast } from 'react-toastify';
import { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { GameContext, IGameContext } from '../../game.context';
import { SudokuBoard } from './sudokuBoard';
import { Cell } from '../cell/cell';
import { Difficulties, solvedBoard } from '../../utils';

configure({ adapter: new Adapter() });

const defaultContext: IGameContext = {
  isLoading: false,
  selectedDifficulty: Difficulties.EASY,
  boardHistory: [],
  historyIndex: 0,
  updateBoard: () => {},
  getNewGameData: () => {},
  resetBoard: () => {},
  clearBoard: () => {},
  checkBoardValid: () => false,
  timeTravel: () => {},
  toast: toast,
  providedValues: [],
};

const gameContext: IGameContext = {
  isLoading: false,
  selectedDifficulty: Difficulties.EASY,
  boardHistory: [{ ...solvedBoard, A1: '1', A2: '2', A3: '' }],
  historyIndex: 0,
  updateBoard: () => {},
  getNewGameData: () => {},
  resetBoard: () => {},
  clearBoard: () => {},
  checkBoardValid: () => false,
  timeTravel: () => {},
  toast: toast,
  providedValues: ['A1'],
};

configure({ adapter: new Adapter() });

describe('SudokuBoard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SudokuBoard />);
    expect(baseElement).toBeTruthy();
  });
});

describe('SudokuBoard default', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <GameContext.Provider value={defaultContext}>
        <SudokuBoard />
      </GameContext.Provider>
    ).container;
  });

  it('should render a grid', () => {
    expect(container.firstChild).toHaveClass('grid');
  });
});

describe('SudokuBoard with data', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <GameContext.Provider value={gameContext}>
        <SudokuBoard />
      </GameContext.Provider>
    );
  });

  it('should render a 9x9 grid', () => {
    expect(wrapper.find(Cell)).toHaveLength(81);
  });

  it('should render provided values', () => {
    expect(wrapper.find('#cell-0 input').instance()).toHaveValue(1);
    expect(wrapper.find('#cell-0 input').instance()).toHaveAttribute('readonly');
  });

  it('should render entered values', () => {
    expect(wrapper.find('#cell-1 input').instance()).toHaveValue(2);
    expect(wrapper.find('#cell-1 input').prop('readOnly')).toBe(false);
  });

  it('should render empty cells', () => {
    expect(wrapper.find('#cell-2 input').instance()).toHaveValue(null);
    expect(wrapper.find('#cell-2 input').prop('readOnly')).toBe(false);
  });
});
