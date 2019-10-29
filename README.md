# Express Heroku Boilerplate

What's the use of creating an application when you can't showcase it to world & and make it accessible by internet.

## Features

1. Easy to Use
2. Deploy on the Go
3. Focus on API creation not on deploying & debugging on your app on server
4. Provides Test for your API using mocha & chai library

## Things Needed
1. Git bash
2. Nodejs
3. Text Editor (VSCode Preferred)
4. Heroku account & Heroku CLI

## How To Use
1. Run this command where you want to add your app in your directory using **git bash**
    ```
    
    git clone git@github.com:ReactorboY/express-heroku-boilerplate.git  
    cd express-heroku-boilerplate
    rm -rf .git
    git init
    git add .
    git commit -m "first app"
    git remote add origin git@github.com:YOUR_USERSNAME/YOUR_REPO_NAME
    git push origin master
    npm install

    ```
    **NOTE: rm -rf .git is used to make this clone directory, to initialise as your own directory to push your app to heroku**  

2. Run Heroku cli command
    ```
    heroku login
    heroku create your-app-name
    git add .
    git commit -m "heroku"
    git push origin master && git push heroku master
    ```

3. if you want to use the environment variable,create a *.env* in your root directory  
   **NOTE:For use in heroku set your config varibales in setting under your dashboard**