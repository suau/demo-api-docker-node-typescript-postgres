# Docker Node + Typescript + Express demo
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

### In this commit (v0.2.0):
 - require less commands to be remembered for development by using docker-compose
 - improve local development by hot reloading changes with nodemon

 ## What to do with this commit
 In your terminal/command-line
 - navigate to the project folder `../CLONED-PROJECT-FOLDER/docker-basics/` 
 - to build and run the our node app run `docker-compose up`  
 The API server is now up and running, listening on port 8080
 
 Open your browser
 - go to http://localhost:8080/api/v1/demo/hello-world  
 Same as before, the server is up and running

 Open your IDE
  - change the hello world text in `../CLONED-PROJECT-FOLDER/docker-basics/src/routes/demo.ts line 9` and save the changes

Check your teminal, nodemon will trigger a rebuild of your code

Once rebuild has finished, go back to your browser and refesh the page  

Yay! We don't have to rebuild and restart the container everytime we make changes to our code.   
BUT WAIT ! There is a catch, everytime we add packages to our node_modules, we have to stop docker-compose and run `docker-compose up -V`