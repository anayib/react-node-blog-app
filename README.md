# Blog App with React and Node

The objective of this app project is to give a simple example on how to create a React App that uses <stong>Contex</> and <strong>Hooks</strongs> on the front end and receive data via a simple REST API built with NodeJS on the back-end.

## Requirements

- Node.js >= 12
- React.js >=16

Check the `./package.json` file and the `./client/package.json` file for more details. 

## Development Environment Configuration

This project is configured in a way that you can use either the React App and the NodeJS app running in independent servers, or both apps running at the same time in the same server. 

To get started:

1. Clone the repository. 
2. install all the NodeJS dependencies 
Execute  `npm install` from the root folder. 
3. Install all the React App dependencies
Execute `npm install` from `./client` folder. 
4. Create the production bundle
Run `npm run build` from `./client` to build the production webpack bundle if you want to try it locally. 
5. Execute the project 
Execute `nodemoon server` from the root. 

<strong> Running the React App Only</app>

Execute `npm start` from  `./client` to get up an running the React App only. 

This is useful if you want to play with the front-end and do not need to interact with the back-end API for development purposes. API calls will fail when running the React APP server only. 

<strong> Running the NodeJS App Only</app>

Execute steps 1, 2 and 5 from above, and the server API in NodeJS will be up and running. You can test it using curl, <a href="https://www.postman.com/" target="_blank">Postman</a>, or any other tool to test the endpoint. 

<strong> Running the React App and NodeJS App from the same server </app>

Execute the project  `nodemoon server` from the root. This is how the current project is configure to run in production enviroment. You will have the React and NodeJS apps up and running.

Access from a browser  `http://localhost:8080`.

To execute the React App suite tests run the following command from `./client` 

```
$ npm test
```

## Contribution

To contribute create a pull request with the changes you thing might be included. 

1. Commits should be in english and capitalized. They should start with a verb, and the first line should not be greater than 50 characters. The message in the commit body should not be greater than 70 characters. Eg:

```
Add api test

api.test.js include the mocking of the API call from React to test the state being passed to Context. Closes #50.
```

2. Use lowercase and (`-`) to separate words when naming your branches. Dont use more than 3 words.
