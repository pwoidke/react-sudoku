import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useMediaPredicate } from 'react-media-hook';
import classnames from 'classnames';

import { GameContext, GameContextWrapper } from './game.context';
import { Game, SudokuIcon } from './components/index';

import './assets/pretty-checkbox.css';
import './App.css';

var store = require('store');

function App() {
  const darkThemeSet = useMediaPredicate('(prefers-color-scheme: dark)');
  const savedTheme = store.get('theme');
  const [preferredTheme, setTheme] = useState(
    savedTheme ? savedTheme : darkThemeSet ? 'dark' : 'light'
  );

  return (
    <div className={classnames('App', preferredTheme)}>
      <header>
        <div className='header-row'>
          <h1>Spek-DoKu</h1>
          <SudokuIcon color={preferredTheme === 'dark' ? 'black' : 'white'} className='icon-mono' />
        </div>
        <div className='theme-changer'>
          🌞
          <div className='pretty p-switch p-fill'>
            <input
              type='checkbox'
              checked={
                (store.get('theme') && store.get('theme') === 'dark') || preferredTheme === 'dark'
              }
              onChange={(e: any) => {
                const selectedTheme = e.target.checked ? 'dark' : 'light';
                setTheme(selectedTheme);
                store.set('theme', selectedTheme);
              }}
            />
            <div className='state'>
              <label className='visually-hidden'>Toggle Light/Dark Mode</label>
            </div>
          </div>
          🌜
        </div>
      </header>
      <div className='content'>
        <ToastContainer position='top-center' autoClose={5000} closeOnClick pauseOnHover />
        <GameContextWrapper>
          <GameContext.Consumer>
            {() => (
              <>
                <Game />
              </>
            )}
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
