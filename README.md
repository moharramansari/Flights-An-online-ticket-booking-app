# Flights-An-online-ticket-booking-app

This is a flights node js project, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recomendation. Feel free to change anyting.

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kinds of tests. (You might want to make seprate test folder)

Let's take a look inside the `src` folder

`-config` -> In this folder anything and everything regarding any configuration o: setup of a libraryor module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup your logging library that can help you to preapare meaningfull log, son configuration for this library should also done here.

`-routes` -> In this routes folder, we register a route and the correspong set of middlewares and controllers to it. 
