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

To build the backend, i've used nodejs v20.11.1 and the NestJs framework on version ^10.0.0.

In the backend, I just created one folder called "passwordCards" with two files inside (passwordCards.service.ts and passwordCards.service.ts). All the data is managed in a JSON file called data.json.

Both files ((passwordCards.service.ts and passwordCards.service.ts) are loaded on app.module.ts, still in this module i had to configure CORS so i could make all the API requests with no problems.

For the backend, i've tried to let things as simple as possible.

I also let the card id creation management go to the backend.

**API endpoints**
 - /passwordCards, GET (findAll)
 - /passwordCards/:id, GET (findOne)
 - /passwordCards, POST (create)
 - /passwordCards/:id, DELETE (remove)
 - /passwordCards/:id, PUT} (update)

The data.json(mock data file) is also included with 21 records to be played on.
