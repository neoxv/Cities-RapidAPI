
# Cities-Rapid API

This is a simple web app that incorporate authentication with Json Web Tokens, Api integration to https://rapidapi.com/wirefreethought/api/geodb-cities/ 
## Installation and Initialization

Clone project and run the backend and cd to the directory

```bash
    npm install
    cd client 
    npm install 
```
To initialize project
```bash
    npm run dev //for backend
    cd client
    npm start //for front end
```
## Environment Variables

To run this project, you will need to add a JWT secret environnement variable in client directory.

    REACT_APP_RAPID_API_KEY
  


## Run Locally

Clone the project

```bash
  git clone https://github.com/neoxv/Cities-RapidAPI
```

Go to the project directory

```bash
  cd Cities-RapidAPI
```

Install dependencies

```bash
  npm install
  cd client
  npm install
```

Start MongoDB server from root folder './'

```bash
 docker-compose up -d
```

Start backend server from root folder './'

```bash
 npm run dev
```
Start frontend server from client folder './client'

```bash
 npm start
```

## Description

For the backend I used Dao architecture to classify the data access layer from the service and controller layer. Even if the project is small enough to not worry about architecture. The higher level classification is in terms of modules so I have Auth, Cities, Users and Common modules.

I have used libraries like winston, express-validator, debug, bcrypt for request logging, input validation, debugging, and encryption respectively. I have used docker to make use of mongoDB instance with out worrying to much about configuration and its better for anyone running the project locally.

For the frontend i started from the recommended way to start new apps with React and Redux which is by using the official Redux+TS template for Create React App, which takes advantage of Redux Toolkit and React Redux's integration with React components.
I have used typescript for both the frontend and backend.

Every module is implemented as a feature and components are found inside the component folder. All interface and initial state models are found in the model file inside each feature. 

I used RTK Query for data fetching and mutating i have to apis for each base url (for backend api, for rapid api). then endpoints are injected to api from their respective module api file. 

