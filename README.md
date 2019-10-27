# Express Heroku Boilerplate

A Easy to use, precise and upto-date Boilerplate for deploying your express app to heroku  

New to Heroku and Express and want to deploy your first app to Heroku, use this boilerplate for quickstart

## Things Needed
1. Git bash
2. Nodejs
3. Text Editor (VSCode Preferred)
4. Heroku account & Heroku CLI

## How To Use
1. run this command where you want to add your app in your directory using git bash
    ```
    
    git clone git@github.com:ReactorboY/express-heroku-boilerplate.git  
    cd express-heroku-boilerplate
    rm -rf .git
    git init
    git add .
    git commit -m "first app"
    git remote add origin git@github.com/*USERSNAME*/*REPO_NAME*
    npm install

    ```
2. Run Heroku cli command
    ```
    heroku login
    heroku create your-app-name
    git add .
    git commit -m "heroku"
    git push origin master && git push heroku master
    ```