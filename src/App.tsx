import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';

import { environment } from './environment';

import { GameContext, GameContextWrapper } from './game.context';
import { Controls, LoadingSpinner, SudokuBoard } from './components/index';
import './App.css';

function App() {
  const { isLoading } = useContext(GameContext);
  const { apiOptions } = environment;

  return (
    <div className='App'>
      <header>
        <h1>Spek-DoKu</h1>
      </header>
      <div className='content'>
        <ToastContainer position='top-center' autoClose={5000} closeOnClick pauseOnHover />
        <LoadingSpinner isLoading={isLoading} />
        {/* <SharedApiWrapper options={apiOptions}> */}
        <GameContextWrapper options={apiOptions}>
          <GameContext.Consumer>
            {(context) => (
              <>
                <SudokuBoard></SudokuBoard>
                <Controls></Controls>
              </>
            )}
          </GameContext.Consumer>
        </GameContextWrapper>
        {/* </SharedApiWrapper> */}
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
