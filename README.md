##start up
```
yarn  
yarn start
```
**Tips**
react-app-rewired 注意版本号@1 不要 @2
```bash
-"start": "react-scripts start"
+"start": "react-app-rewired start --scripts-version react-scripts-ts"
-"build": "react-scripts build"
+"build": "react-app-rewired build --scripts-version react-scripts-ts"
-"test": "react-scripts test"
+"test": "react-app-rewired test --env=jsdom --scripts-version react-scripts-ts"
```