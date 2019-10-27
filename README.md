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
    git remote add origin git@github.com:YOUR_USERSNAME/YOUR_REPO_NAME
    git push origin master
    npm install

    ```
    **NOTE: rm -rf .git is used to make this clone directory in your own directory to push your app to heroku**  

2. Run Heroku cli command
    ```
    heroku login
    heroku create your-app-name
    git add .
    git commit -m "heroku"
    git push origin master && git push heroku master
    ```

3. if you want to use the environment variable in root directory called *.env*