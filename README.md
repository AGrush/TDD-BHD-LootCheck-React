## setup for part1: basic app
### Dev dependencies:
`npm i react-test-renderer jest-cli@20.0.4 enzyme enzyme-adapter-react-16 --save-dev`
### Prod Dependencies;
`npm i redux react-redux sfcookies --save`

### eject react

### create setupTests.js
```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter(), disableLifecycleMethods: true });
```

### amend package.json
```
"setupFilesAfterEnv": [
      "<rootDir>setupTests.js"
    ],
```

### build basic deposit/withdaraw functions



## setup for part2: API stuff
### Dev dependencies:
`npm i redux-mock-store fetch-mock node-fetch --save-dev`
### Prod Dependencies;
`npm i redux-thunk --save`

### run coverage report
npm run test -- --coverage


- Asynchronous code does not block the application from running. It runs in the background and allows other features/aspects of the application to occur.

- Asynchronous actions in redux return more than plain objects. They can return functions and promises.

- Middleware adds a layer between the redux store and code like an asynchronous fetch request to an API.

- Redux Thunk is a piece of middleware that allows for actions to return JavaScript promises.

- Fetch-Mock mocks the native fetch() method of JavaScript in the testing environment by stubbing http endpoints.

- The redux combineReducers() combines more than one reducer into one overall reducer for an application.