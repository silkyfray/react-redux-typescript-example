# React-Redux-Typescript-Example

This app demonstrates a React.js frontend used in conjunction with a small Node.js backend using a Mongo database.
The app is a webdesign inspiration website. A user can submit designs for approval. A infinite scroll grid displays all the approved designs.

This project intends to demonstrate React fundamentals in Typescript. See the [Features](##Features) section for more details.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The app has dependency on Nodejs and MongoDB.

##### Getting Nodejs
Head over to the [nodejs website](https://nodejs.org/en/) and download the latest version.

##### Getting MongoDB
Install the latest free version of [MongoDB](https://www.mongodb.com/download-center#community)


### Installing

A step by guide to setup the app.

From the root folder tell npm to install the dependencies.
```
npm install
```
The following step will compile and run the server. The server will start listening on port 3001.
```
npm run dev:server
```
Insert some test design data. Do this in a separate command line session while the server is running. Make sure Mongo is running as well.
```
node ./server/insertTestData.js
```
Approve some of that data.
```
node ./server/approveTestData.js
```
Compile and run the React client
```
npm run dev:client
```
Head over to http://localhost:8080 in your browser.

Alternatively, you can run the server and client in the same step.
```
npm run dev
```

## Features

#### Server
* Mongoose for modelling the Mongo documents.
* express for handling the REST requests.
* Demonstration of using promise chains to handle data dependency.
* Using webshot take a snapshot of a website in the case of a user not including an image when submitting a new request.

#### Client
* React for the view, Redux for the state, Typescript for the static typing.
* Demonstration of infinite scroll where data is requested from the server on demand as the user scroll down the page.
* Route configuration using react router v4.
* Using redux-form. How to initialise the form from state, extracting values from the form in a redux way.
* Reusing components. E.g using the same form for submitting a new design as well as approving a design.
* Demonstracting the use of redux *connect* function to connect the redux state to a react component.
* Using redux-thunk to dispatch functions that fetch data from the server and then dispatch actions to update the state.
* Using a global notification system using the react-notification-system.
* Using the lightweight skeleton.css for css boilerplate.

## Contributing

Fork. Change. Pull Request to master. Simples. 

You will be added to [Contributors](Contributors.md) :)

## Troubleshooting

#### I am on Windows and see this error when I run "npm install" - "if not defined npm_config_node_gyp"
This means some Windows specific dependencies are not found on the system. From command line with admin priviledges run this command: 
```
npm install --global --production windows-build-tools
```

## License

This project is licensed under the MIT License - see the [License.md](License.md) file for details.
