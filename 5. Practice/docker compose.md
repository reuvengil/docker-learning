# Docker Compose Practice

In this practice, we will use Docker Compose to build and run an application in a containerized environment. 

**`Please note`**, all commands are provided at your service in the [commands](../6.%20Commands/2.%20commands.md) file and the syntax of the docker-compose.yml are provided at your service in the [docker-compose-examples](../4.%20Compose/2.%20docker-compose-examples.md) file.

Follow the steps below:

## Step 1: Navigate to the Project Directory

Open your terminal and navigate to the directory that contains the [project files](../Express-Build/).

## Step 2: Create the Docker Compose Configuration

Create a new file named `docker-compose.yml` in the project directory.

Open the `docker-compose.yml` file in a text editor and start defining the services you want to include in the Docker Compose configuration.

Begin by specifying the version of the Compose file format at the top of the docker-compose.yml file. For example, you can use version 3:
```yml
version: '3'
```

In the `docker-compose.yml` file, use the `services` keyword to define the containers. Each service represents a container in the composition. Specify the container's configuration, including the previously defined settings from the [previous practice](../2.%20Practice/2.%20docker-build.md), such as the image, ports, environment variables, and volume bindings.

## Step 3: Start the Application

In the terminal, use the `docker-compose up` command along with any necessary flags to start the application defined in the `docker-compose.yml` file.

## Step 4: Verify the Running Application

Check if the application is running by either using the `docker ps` command to view the running containers or accessing the application through the provided URL or port.

## Step 5: Stop and Remove the Containers and Images

When you're done testing the application, use the appropriate command to stop and remove the containers and associated images.

For more information about Docker Compose practice, you can refer to the official Docker Compose "Getting Started" guide at **`!`** [this link](https://docs.docker.com/compose/gettingstarted/) **`!`**. It provides detailed instructions and examples to help you further explore and master Docker Compose.

By following these steps, you can practice using Docker Compose to build, run, and manage containerized applications. Customize the `docker-compose.yml` file based on your project's requirements and explore additional Docker Compose commands to further enhance your container workflow.

#
[Back](../4.%20Compose/2.%20docker-compose-examples.md)