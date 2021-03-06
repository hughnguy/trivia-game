# trivia-game

This project is a platform agnostic react trivia game application.

# v2 updates:

* Platform agnostic react modules! React native will import *.native.js and web react will import *.js. We can increase the specificity by creating *.ios.js or *.android.js files as well. index.js is also present in all modules now so you can just import the directory instead of file.
* Updated the readme. Feel free to check out the instructions below on running the web app.
* Moved all business logic and state management into redux. Added selectors to query state from the store (if there were any expensive calculations/filtering id wrap them in https://github.com/reactjs/reselect)
* Converted all components to functional stateless ones (only Home.js needs a lifecycle method to make an api call on mount)
* The page components Home, Quiz, and Result now act strictly as containers connected to redux whereas everything else is presentational. These containers are reused in both react web/react native.
* Replaced promise chains with async/await.
* Decoded the html entities
* Fixed loop key anti pattern
* Added a few unit test examples (co-located with components) using enzyme, mocha, chai, sinon, and karma as the test runner
* Added code coverage reporter (I could write more tests to increase coverage but this is an example of how we can fail a build if the percentages do not reach the thresholds)
* Use ThemeProvider by styled-components
* Externalized all UI strings
* Redux store is now persisted into web local storage or react native asyncstorage. The game will resume even if you exit the app.
* Added linter for javascript and css
* Nodejs to serve the web app
* Webpack for bundling assets

## Setup

1. Install nodejs and npm on your local machine (https://nodejs.org/en/)
2. Install all npm dependencies. In the root directory run:
```
npm install
```

## Run the web application

To build the minified production javascript run:
```
npm run build-prod
```

To build the javascript for a development environment run:
```
npm run build
```
or if you would like webpack to automatically watch for changes and re-build:
```
npm run watch
```

After running any of the commands above, run the following to serve the web application:
```
node server.js
```

To open the application, go to the url:
```
http://localhost:8000
```

## Run the mobile native application

To build the native application, run the following command:
```
npm start
```

This will run your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

To run on an actual device or simulator:

```
npm run ios
```

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

```
npm run android
```

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator.

## Running unit tests

To run unit tests for the web application:
```
npm run unit-test
```

To debug unit tests for the web application. Instead of launching on all supported browsers, this will only launch a single instance of chrome:
```
npm run unit-test-debug
```

To check for unit test code coverage. A coverage report will be generated in the directory: tests/coverage/html
```
npm run unit-test-coverage
```

## Running functional tests

To run functional tests for the web application, make sure the web app is bundled up and running first:
```
npm run build
node server.js
```
then run:
```
npm run functional-test
```

To debug functional tests for the web application. Instead of launching on all supported browsers, this will only launch a single instance of chrome:
```
npm run functional-test-debug
```

## Linter

To run all linters for the front-end code:
```
npm run lint
```

To run linter for css:
```
npm run lint-css
```

To run linter for javascript:
```
npm run lint-js
```
