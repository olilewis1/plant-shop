# Plant Shop Website README

## Contents
[Overview](#overview)<br/>
[Deployed Project](#deployed-project)<br/>
[Code Installation](#code-installation)<br/>
[Technologies Used](#technologies-used)<br/>
[Brief](#brief)<br/>
[Backend Usage](#backend-usage)<br/>
[How to Seed the Database](#how-to-seed-the-database)<br/>
[Backend Architecture](#backend-architecture)<br/>

## Overview
This document serves as the README for the Plant Shop website project, detailing its development, features, and deployment.

## Demo 
Homepage: 
![Homepage](./assets/love-mambo-home.png)

Flower Sell Link: 
![Info](./assets/love-mambo-sell.png)

Selling additional units: 
![About](./assets/love-mambo-flowers.png)

## Deployed Project
The website is currently under development and not yet deployed.

## Code Installation

### Backend Setup

To run the backend server locally, follow these steps:

1. **Clone this repository**: 

    ```bash
    git clone https://github.com/your-username/plant-shop.git
    ```

2. **Navigate to the project directory**: 

    ```bash
    cd plant-shop
    ```

3. **Install backend dependencies**: 

    ```bash
    npm install
    ```

4. **Set up MongoDB Atlas**: 

   - Create an account on MongoDB Atlas if you haven't already.
   - Create a new cluster and replace the `dbURI` variable in `index.js` with your MongoDB connection string.

5. **Run the backend server**: 

    ```bash
    npm start
    ```

   This will start the backend server at `http://localhost:3000`.

To run the project locally frontend, follow these steps:
1. Clone this repository: `git clone https://github.com/your-username/plant-shop.git`
2. Navigate to the project directory: `cd plant-shop`
3. Install dependencies: `npm install`
4. Run the development server: `npm start`
5. Open your browser and visit: `http://localhost:3000`

## Technologies Used
- React
- React Router
- React Reveal

## Brief
The project involves the development of a professional plant online business website, aiming to offer a unique and durable selection of plants and related products.

## NavbarHomepage.js
The `NavbarHomepage.js` component is responsible for rendering the navigation bar at the top of the website. It utilizes React Router for navigation and Bootstrap for styling. Noteworthy features include:
- Conditional rendering based on the current location using React Router's `useLocation` hook.
- Interaction with Redux store using `useDispatch` and `useSelector` hooks for state management.
- Dynamic class toggling for responsive behavior using useState hook.
- Increment and decrement actions dispatched to Redux store based on us

## Backend Usage

### How to Seed the Database

In the backend code, there is a script called `seedDatabase` that is responsible for populating the MongoDB database with initial data. This process is commonly referred to as "seeding." Here's how it works:

1. **Connecting to the Database**: The script first establishes a connection to the MongoDB database using Mongoose, a MongoDB object modeling tool designed for Node.js.
2. **Dropping the Database**: It then drops the existing database to ensure a clean slate for seeding.
3. **Adding Plants and Users**: Next, the script creates new documents in the database based on the provided data for plants and users. This data is imported from separate files (`plants.js` and `users.js`) located in the `db/data` directory.
4. **Closing the Connection**: Finally, after the seeding process is complete, the script closes the database connection.

### Backend Architecture

The backend of the application follows a Model-View-Controller (MVC) architecture pattern. Here's a brief overview of each component:

- **Models**: The `models` directory contains Mongoose schema definitions for the `Plants` and `User` models. These schemas define the structure of documents stored in the database.

- **Routes**: The `routes` directory defines the API endpoints and their corresponding controller functions. For example, there are routes for handling CRUD operations on plants (`/plants`) and users (`/user`), as well as authentication routes (`/register` and `/login`).

- **Controllers**: The `controllers` directory contains the logic for handling incoming requests and generating responses. Each route has its own controller function responsible for processing the request and interacting with the database as needed.

Overall, this backend setup allows for the creation, retrieval, updating, and deletion (CRUD) of plants and users, as well as user authentication functionality.
