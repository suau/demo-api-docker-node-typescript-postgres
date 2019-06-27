# Docker Node + Typescript + Express + Postgres demo
This is a basic demo of running a node application on docker.  
The first commit starts from the essentials and each commit adds another step to a production ready configuration.

### About the folder layout
For demo purposes we check the parent folder of our necessary code into version control.  
Usually only the subfolder `./docker-basics/` would go into version control.

### Pre-requisits
- Install Docker on your local machine

### In previous commits:
(v0.1.0)  
 - typescript, node and docker boilerplate files
 - basic API server with typescript, node and express
 - basic `/docker-basics/Dockerfile` that builds our API server and runs it

(v0.2.0)
 - require less commands to be remembered for development by using docker-compose
 - improve local development by hot reloading changes with nodemon

### In this commit (v0.3.0):
 - add postgres as a docker service
 - supply a postgres init script
 - connect from our nodeapp to postgres and do a simple query

 ## What to do with this commit
 In your terminal/command-line
 - navigate to the project folder `../CLONED-PROJECT-FOLDER/docker-basics/` 
 - We've added pg (the postgres client for node) to our nodeapp. To rebuild our node app with the new node_modules run `docker-compose build`  
 - To run our nodeapp and postgres run `docker-compose up -V`  
 The API server is now up and running, listening on port 8080
 
 Open your browser
 - go to http://localhost:8080/api/v1/demo/names
 
Yay! We have added a database to our local development environment and connected to it from our nodeapp.  
Recommended:
 - use your favorite git client to look at the changes to `../docker-basics/docker-compose.yml`