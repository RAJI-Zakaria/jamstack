# Next.js JAMSTACK Project

This project is a [Next.js](https://nextjs.org/) application intended to run in a Docker container.

## Prerequisites

Before running this project, ensure you have [Docker](https://www.docker.com/) installed on your machine.

## Getting Started

To run this Next.js app in a Docker container, follow these steps:

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/your-nextjs-project.git
    cd your-nextjs-project
    ```

2. Build and start the Docker container:

    ```bash
    docker-compose up --build
    ```

3. Access the application:

    Once the Docker container is up and running, you can access the application in your browser at `http://localhost`.

## Docker Configuration

The project uses a `docker-compose.yml` file to configure the Docker service:

```yaml
version: '3'
services:
  nextjs-app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "80:3000" # Forward container's 3000 port to host's 80 port
    environment:
      - PORT=3000 # Set the port for the app
    restart: unless-stopped # Ensures the service restarts unless explicitly stopped
    command: ["npm", "run", "start"] # Override the default CMD from the Dockerfile
```

## Note
- You can run the app without docker using npm