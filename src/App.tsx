import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useMediaPredicate } from 'react-media-hook';
import classnames from 'classnames';

import { GameContext, GameContextWrapper } from './game.context';
import { Game } from './components/index';
import { sudokuMono } from './assets';

import './assets/pretty-checkbox.css';
import './App.css';

var store = require('store');

function App() {
  const darkThemeSet = useMediaPredicate('(prefers-color-scheme: dark)');
  const savedTheme = store.get('theme');
  const [preferredTheme, settheme] = useState(
    savedTheme ? savedTheme : darkThemeSet ? 'dark' : 'light'
  );

  return (
    <div className={classnames('App', preferredTheme)}>
      <header>
        <div className='header-row'>
          <h1>Spek-DoKu</h1>
          <img src={sudokuMono} alt='Spek-DoKu' style={{ width: '70px' }} />
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
                settheme(selectedTheme);
                store.set('theme', selectedTheme);
              }}
            />
            <div className='state'>
              <label className='visually-hidden'>Toggle Light/Dark Mode</label>
            </div>
          </div>
          🌜
        </div>
        {/* <label>
          <ToggleButton
            inactiveLabel={'🌞'}
            activeLabel={'🌜'}
            value={
              (store.get('theme') && store.get('theme') === 'dark') || preferredTheme === 'dark'
            }
            onToggle={(value) => {
              store.set('theme', value ? 'dark' : 'light');
            }}
          />
          <span className='visually-hidden'>Toggle Light/Dark Mode</span>
        </label> */}
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
