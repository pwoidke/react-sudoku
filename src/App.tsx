import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useMediaPredicate } from 'react-media-hook';
import classnames from 'classnames';
// @ts-ignore
import ToggleButton from 'react-toggle-button';

import { GameContext, GameContextWrapper } from './game.context';
import { Game, SudokuIcon } from './components';

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
          <span className='theme-label'>🌞</span>
          <ToggleButton
            inactiveLabel=''
            activeLabel=''
            thumbStyle={{ display: 'inline-flex' }}
            colors={{
              activeThumb: {
                base: '#444',
              },
              inactiveThumb: {
                base: '#ccc',
              },
              active: {
                base: '#ccc',
                hover: '#ddd',
              },
              inactive: {
                base: '#444',
                hover: '#555',
              },
            }}
            passThroughInputProps={{ testId: 'theme-toggle-button' }}
            value={preferredTheme === 'dark'}
            onToggle={(value: any) => {
              const selectedTheme = value ? 'light' : 'dark';
              setTheme(selectedTheme);
              store.set('theme', selectedTheme);
            }}
          />
          <span className='theme-label'>🌜</span>
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
