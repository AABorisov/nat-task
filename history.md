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
# Install react & redux

```
