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

### `TODOs (and things I wanted to do but didn't have time):`

- Unit tests
- Highlight validation issues (row/column/block)
- Bold initial values and set disabled (https://github.com/pwoidke/react-sudoku/tree/feature/disable-provided-values)
- Display something when puzzle is solved

```javascript
{
  checkBoardValid(boardHistory[historyIndex]) &&
    Object.values(boardHistory[historyIndex]).join('').length === 81 &&
    'You did it!';
}
```

- Test w/ screen reader
- Move SCSS vars to constants
- JSDocs
- ~~font awesome~~ Using emojis for simplicity
- ~~RTK?~~ Fetch is fine since there's just 1 API call
- ~~Feature flags?~~ Can't think of anything worth the effort to add them
