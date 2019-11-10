repo: https://github.com/AABorisov/nat-task.git

```shell script
git init
npm init --yes
type nul > .gitignore
```

Copy [JetBrains.gitignore](https://github.com/github/gitignore/blob/master/Global/JetBrains.gitignore)

```shell script
type nul > history.md
# Type everything, that was did with the project.

type nul > .editorconfig
# Editor config
```

```shell script
git add .
git rm -r --cached .idea
git commit -m "First commit"
git remote add origin https://github.com/AABorisov/nat-task.git
git remote -v
git push origin master
```

```shell script
# travis-ci & Heroku
# Activate the github-repository into travis-ci
# Set environment variables HEROKU_SECRET_KEY in the travis-ci settings of project
# with secure API_KEY from heroku account settings
# https://dashboard.heroku.com/account

# Create project application in heroku dashboard (nat-task)

# Add file .travis.yml
type nul > .travis.yml
```

```shell script
# Install webpack
yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D html-webpack-plugin html-loader
yarn add express
yarn add -D @types/express

```

```shell script
# Install typescript
yarn add -D typescript ts-loader source-map-loader
yarn add -D @types/express
type nul > tsconfig.json
```

Is it time for react/redux or eslint/prettier?
Let start with eslint

```shell script
yarn add -D prettier
type nul > .prettierrc

npx install-peerdeps --dev eslint-config-airbnb
yarn add -D eslint-config-prettier
yarn add -D eslint-plugin-prettier
yarn add -D @typescript-eslint/parser
yarn add -D @typescript-eslint/eslint-plugin
type nul > .eslintrc
```

```shell script
# Install husky and lint-staged
yarn add --dev lint-staged husky
```

```shell script
# Install scss
yarn add -D sass-loader node-sass css-loader style-loader
yarn add -D mini-css-extract-plugin
type nul > declaration.d.ts
yarn add -D clean-webpack-plugin

yarn add classnames
yarn add -D @types/classnames
```

Usage:

```
import styles = require('./styles.scss');
import * as styles3 from './styles.scss';
// NOT USE:
// import styles2 from './styles.scss';

const root = document.getElementById('root');
const para = document.createElement('p');
para.innerHTML = '<p class= ' + styles.className + '>Hello from root, Natera.</p>';
root.appendChild(para);
```

```shell script
# Install react & redux
yarn add react react-dom
yarn add -D @types/react @types/react-dom
yarn add redux react-redux
yarn add -D @types/react-redux
```

```shell script
# Install file-loader for loading of images
yarn add -D file-loader
yarn add -D copy-webpack-plugin

# Copy images to assets folder
```

```shell script
yarn add react-router-dom
yarn add -D @types/react-router-dom
```
```shell script
yarn add react-transition-group
yarn add -D @types/react-transition-group
```
