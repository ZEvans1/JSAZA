# JSAZA

#### Zach Evans, Aaron Ross, Adam Calhoun, James Donlan, Sam Gespass-- March 8th, 2018

JSAZA is a social media platform for connecting local musicians and music enthusiasts.

## Development server
* Install Angular CLI
* Open a terminal window
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
* Install Angular CLI
* Open a terminal window
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Installation instructions
* CLone this project
* Run `npm install` in the project directory 
* Create a file called api-keys.ts in this location: `src/environments`
* Copy your firebase database settings into api-keys.ts and declare it as `export var masterFirebaseConfig = {`

  `apiKey: "{your-api-key}",`

`  authDomain: "{your-auth-domain}",`

`  databaseURL: "{your-database-url}",`

`  projectId: "{your-project-id}",`

`  storageBucket: "{your-storage-bucket-url}",`

`  messagingSenderId: {your-firebase-setting}`

`};`

##TO DO:
* Recommendation system/I'm Feeling Lucky -- shows the user a random other user with similar interests
* Search by Location
* Private Messaging
* More robust editing controls for user accounts
* User submitted genres, instruments

##TECHNOLOGIES USED:
* Angular
* Materialize
* CSS
* JavaScript
* TypeScript
* HTML

Copyright(c) JSAZA 2018
