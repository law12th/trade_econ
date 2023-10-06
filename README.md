# trade_econ
simple economics analysis tool

## Getting Started

These instructions will help you get the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have met the following the requirements:

- Docker: [Installation Guide](https://docs.docker.com/get-docker/)
- Docker Compose: [Installation Guide](https://docs.docker.com/compose/install/)

### Step 1: Configure back-te

1. Navigate to the `back-te` directory:

   ```
   cd back-te
   ```

2. Rename `.env.example` to `.env`:

   ```
   mv .env.example .env
   ```

3. Edit the `.env` file and add your Trading Economics API key and the port number at which the application is running.

### Step 2: Build and Run the Project

1. Go back to the root directory of your project:

   ```
   cd ..
   ```

2. Build and start the project using Docker Compose:

   ```
   docker-compose up --build
   ```

   This command will build the Docker images for the te-front and back-te and start the containers.

### Step 3: Access the Frontend

1. Open a web browser and navigate to:

   ```
   http://localhost:5173
   ```

   This will take you to the running frontend application.
