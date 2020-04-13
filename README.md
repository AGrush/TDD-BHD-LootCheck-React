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