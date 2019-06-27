# Docker Node + Typescript + Express demo
This is a basic demo of running a node application on docker.
The first commit starts from the essentials and each commit adds another step to a production ready configuration.

### About the folder layout
For demo purposes we check the parent folder of our necessary code into version control.
Usually only the subfolder `./docker-basics/` would go into version control.

### Pre-requisits
- Install Docker on your local machine

### In this commit (v0.1.0):
 - typescript, node and docker boilerplate files
 - basic API server with typescript, node and express
 - basic `/docker-basics/nodeapp/Dockerfile` that builds our API server and runs it

 ## What to do with this commit
 In your terminal/command-line
 - navigate to the project folder `../CLONED-PROJECT-FOLDER/docker-basics/nodeapp/`
 - to build the image run `docker build -t mynodeapp:1 .`
 - to run the image in a container run `docker run -p 8080:8080 mynodeapp:1`
 - wait for the terminal output like `Listening on Port 8080`
 The API server is now up and running, listening on port 8080

 Now open your browser
 - go to http://localhost:8080/api/v1/demo/hello-world
 Yay ! Our API server is running
