# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

todo:

Build board

- Sudoku board data object?
- Flat object w/ 81 keys

- markup (table vs grid)
- Grid of numeric text inputs

- styles
- CSS Grid for board
- Text styles

- input events
- Click, set value
- Arrow/tab navigation

Build other controls

- Generate
- Validate
- Solve

API

- RTK
- Get board
- Move endpoints to env file

Unit tests

If time:

- Dark mode
- Save progress to local storage
- JSDocs
- Feature flags?

```javscript
checkSet(set: string[]) {
    return set.sort() === [1,2,3,4,5,6,7,8,9];
    // or JSON.stringify(set) === "[1,2,3,4,5,6,7,8,9]";
}

Solver(board) {
    rows = [ "A", "B", "C", "D", "E", "F", "G", "H", "I" ];
    cols = [ "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
    valid = true;

    // rows (check all A#, B#, C#,...)
    var set = [];
    foreach (row) {
        foreach (col) {
            set.push(board[row + col])
        }

        valid = valid && checkSet(set);
    }
    // columns (check all d1, d2, d3,...)
    set = [];
    foreach (col) {
        foreach (row) {
            set.push(board[row + col])
        }

        valid = valid && checkSet(set);
    }
    set = [];
    // blocks (check all {A,B,C}{1,2,3},...)
    foreach (col) {
        foreach (row) {
            set.push(board[row + col])
        }

        valid = valid && checkSet(set);
    }
}
```

```css
.grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}

.cell {
  flex: 0 0 33%;
  height: 100px;
  width: 100px;
  margin-bottom: 5px;
}
```

```html
<div class="grid">
  <div class="cell" style="background-color: green">1</div>
  <div class="cell" style="background-color: red">1</div>
  <div class="cell" style="background-color: blue">1</div>
  <div class="cell" style="background-color: yellow">1</div>
</div>
```
