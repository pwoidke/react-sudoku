import { ToastContainer } from 'react-toastify';

import { GameContext, GameContextWrapper } from './game.context';
import { Game } from './components/index';
import { sudokuMono } from './assets';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header>
        <div>
          <h1>Spek-DoKu</h1>
          <img src={sudokuMono} alt='Spek-DoKu' style={{ width: '70px' }} />
        </div>
      </header>
      <div className='content'>
        <ToastContainer position='top-center' autoClose={5000} closeOnClick pauseOnHover />
        <GameContextWrapper>
          <GameContext.Consumer>
            {(context) =>
              context.gameBoard && (
                <>
                  <Game />
                </>
              )
            }
          </GameContext.Consumer>
        </GameContextWrapper>
      </div>
      <footer>
        <a href='https://github.com/pwoidke/react-sudoku' target='_blank' rel='noreferrer'>
          🐙
        </a>
      </footer>
    </div>
  );
}

export default App;
