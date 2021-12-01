# React Sudoku

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and based on [SuGOku](https://sugoku.herokuapp.com/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `Highlights`

- Keyboard navigation: Navigate to the board using `tab`, use ⬆️⬇️⬅️➡️ to navigate through grid, press `enter` to select the input and confirm value
- Undo/redo: If you make a mistake, use the `undo` button to go back. Use the `redo` button to go forward.
- Restore game: If you close the app, your game is saved locally and is restored when you come back.
- Light/Dark mode: If you have a system theme preference set, the game will load using that theme. The theme can be changed using the toggle in the header.

## `Packages & Dependencies`

I used several packages & dependencies to build this app. Some of the notable ones are listed here.

- [@mattflow/sudoku-solver](https://github.com/mattflow/sudoku-solver): Provides function to solve sudoku puzzle given a list of cell values
- [classnames](https://github.com/JedWatson/classnames): Used to conditionally set class names
- [pretty-checkbox](https://github.com/lokesh-coder/pretty-checkbox): I usually use ([`react-toggle-button`](https://gdowens.github.io/react-toggle-button/)) for toggle buttons, but I was having a dependency issue so I used `pretty-checkbox` instead (it's not as nice, but it works).
- [react-media-hook](https://github.com/lessmess-dev/react-media-hook): Used to get the system light/dark mode selection
- [react-spinners](https://www.davidhu.io/react-spinners/): Loading indicator
- [react-toastify](https://fkhadra.github.io/react-toastify/): Used to display error messages and the "puzzle solved" image
- (store.js)[https://github.com/marcuswestin/store.js/]: Set/get local storage items

## `Things I wanted to do but didn't have time`

- More unit tests
- Highlight validation issues (row/column/block)
- Test w/ screen reader
- Move SCSS vars to constants
- JSDocs
- ~~font awesome~~ Using emojis for simplicity
- ~~RTK?~~ Fetch is fine since there's just 1 API call
- ~~Feature flags?~~ Can't think of anything worth the effort to add them
