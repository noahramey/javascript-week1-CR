# _Github Repository App_

##### This application is a site to help me practice creating gulp tasks, bower tasks, and an API call via the GitHub API. The user can enter a github username and view a list of repositories that user has made.

## Technologies Used

Application: Node, Bower, JSON, NPM, Gulp<br>
Framework: None

Installation
------------

First clone the repository.  
```
$ git clone https://github.com/noahramey/javascript-week1-CR.git
```

Install required packages via npm and bower:
```
$ npm install
$ bower install
```

Sign into Github and go to https://github.com/settings/tokens to create a personal access token to gain access to the Github API.  Create a .env file in the local repository and add your api key in this line
```
exports.apiKey = 'youraccesstokengoeshere';
```

Run the gulp build task in the terminal in the repository folder:
```
$ gulp build
```

Run the gulp serve task in the terminal in the repository folder:
```
$ gulp serve
```

Your browser should open the webpage automatically. If it doesn't, open your browser and go to `localhost:3000`.

License
-------

MIT License. Copyright &copy; 2016 "Noah Ramey"
