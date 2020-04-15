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
