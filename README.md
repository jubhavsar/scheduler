# Interview Scheduler 

- It's a single page application (SPA) called Interview Scheduler, built using React.
- Data is persisted by the API server using a PostgreSQL database.
- The client application communicates with an API server over HTTP, using the JSON format.

## Technical Specifications

React
Webpack, Babel
Axios, WebSockets
Axios
Storybook, Webpack Dev Server, Jest, Testing Library, E2E Testing Cypress
The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
!["book-appointment Page"](https://github.com/jubhavsar/scheduler/blob/master/docs/book-appointment.png?raw=true)
!["Main-interviewer-scheduler Page"](https://github.com/jubhavsar/scheduler/blob/master/docs/interview-scheduler.png?raw=true)
!["delete-form page"](https://github.com/jubhavsar/scheduler/blob/master/docs/delete-form.png?raw=true)
