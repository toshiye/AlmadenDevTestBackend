# AlmadenDevTestBackend

This is the solution for the **Coding Challenge Password Management** built by Gabriel Sassaki.
This test were built using Visual Studio Code.
The coding took me 4 hours to complete and i took 2 more hours to review and manually test the code.

## How to run the test app

 - Download or clone(https://github.com/toshiye/AlmadenDevTestBackend.git) in a folder of your choice.
 - Navigate to the AlmadenDevTestBackend folder using the terminal, cmd or you preferred cli.
 - Run **npm i** or **npm install** and wait until finishing the dependecies installation.
 - Run **npm run start:dev** and the backend will start at "http://localhost:3000/", you can already test it on postman, insomnia or any other API testing and development tool.

## Algorithm & Approach

To build the backend, i've used nodejs v20.11.1 and the NestJs framework on version ^10.0.0.
In the backend i just have created one folder called "passwordCards" with two files inside (passwordCards.service.ts and passwordCards.service.ts) and all the data is being managed on jason file called data.json.
Both files ((passwordCards.service.ts and passwordCards.service.ts) are loaded on app.module.ts, still in this module i had to configure CORS so i could make all the api rquests with no problems.
For the backend, i've tryied to let things as simple as possible.
I also decided to let the cards id creation magament to the backend.

**API endpoints**
 - /passwordCards, GET (findAll)
 - /passwordCards/:id, GET (findOne)
 - /passwordCards, POST (create)
 - /passwordCards/:id, DELETE (remove)
 - /passwordCards/:id, PUT} (update)

The data.json(mock data file) is also included with 21 records to be played on.