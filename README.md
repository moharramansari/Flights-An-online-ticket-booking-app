# Flights-An-online-ticket-booking-app

This is a flights node js project, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recomendation. Feel free to change anyting.

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kinds of tests. (You might want to make seprate test folder)

Let's take a look inside the `src` folder

`-config` -> In this folder anything and everything regarding any configuration o: setup of a libraryor module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup your logging library that can help you to preapare meaningfull log, son configuration for this library should also done here.

`-routes` -> In this routes folder, we register a route and the correspong set of middlewares and controllers to it.

`-middlewares` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

`-controllers` -> they are kind of last middleware

`-repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

`-services` -> contains the buiness logic and interacts with repositories for data from the database

`utils-` -> contains helper methods, error classes etc.

### Set up the project

- Download this template from github and open it in your favourite text editor.
- Go inside the folder path and execute the following command:
