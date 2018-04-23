# trivia-game

This project is a platform agnostic react trivia game application.

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

## Running tests

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

## Linter

To run all linters for the front-end code:
```
npm run unit-test-coverage
```
