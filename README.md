# AlmadenDevTestBackend

This is the solution for the **Coding Challenge Password Management** built by Gabriel Sassaki.

This test was built using Visual Studio Code.

I completed the coding in 4 hours, and I then took 2 more hours to review and manually test the code.

## How to run the test app

 - Download or clone(https://github.com/toshiye/AlmadenDevTestBackend.git) in a folder of your choice.
 - Navigate to the AlmadenDevTestBackend folder using the terminal, cmd or your preferred cli.
 - Run **npm i** or **npm install** and wait until finishing the dependecies installation.
 - Run **npm run start:dev** and the backend will start at "http://localhost:3000/", you can already test it on Postman, insomnia or any other API testing and development tool.

## Algorithm & Approach

For the backend, I used Node.js (version 20.11.1) along with the NestJS framework (version ^10.0.0).

The backend is organized into a single folder named passwordCards, which contains two key files:

passwordCards.service.ts
passwordCards.controller.ts
All data is stored and managed in a JSON file named data.json.

Both the service and controller files are loaded in the app.module.ts file. Additionally, I configured CORS in this module to ensure smooth handling of all API requests.

To keep the backend simple and efficient, I delegated the responsibility for managing card ID creation to the backend itself.

**API endpoints**
 - /passwordCards, GET (findAll)
 - /passwordCards/:id, GET (findOne)
 - /passwordCards, POST (create)
 - /passwordCards/:id, DELETE (remove)
 - /passwordCards/:id, PUT} (update)

The data.json(mock data file) is also included with 21 records to be played on.
