# Flights Service

Welcome to the Flights Service project! This guide will assist you in setting up the project on your local machine, configuring the environment, and understanding the database design.

## Project Setup

Follow these steps to set up the project on your local machine:

1. **Clone the Project**: Clone the project repository to your local machine using your preferred version control tool.

2. **Install Dependencies**: Navigate to the root directory of the downloaded project in your terminal and execute the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**: Create a `.env` file in the root directory of the project and add the following environment variable:

   ```
   PORT=3000
   ```

4. **Database Configuration**: Inside the `src/config` folder, create a new file named `config.json`. Add the following JSON configuration to the `config.json` file:

   ```json
   {
     "development": {
       "username": "<YOUR_DB_LOGIN_NAME>",
       "password": "<YOUR_DB_PASSWORD>",
       "database": "Flights_Search_DB_DEV",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

   Replace `<YOUR_DB_LOGIN_NAME>` and `<YOUR_DB_PASSWORD>` with your actual database login credentials.

5. **Database Initialization**: Open your terminal, navigate to the `src` folder, and execute the following commands to initialize the database and perform migrations:

   ```bash
   npx sequelize db:create
   npx sequelize db:migrate
   ```

## Database Design

The project's database is designed as follows:

- **City Table**
  - Columns: id, name, created_at, updated_at

- **Airport Table**
  - Columns: id, name, address, city_id, created_at, updated_at
  - Relationships: City has many airports, and an Airport belongs to a city (one-to-many)

  To generate the Airport model, run the following command:

  ```bash
  npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
  ```

- **Airplane Table**
  - Relationships: A flight belongs to an airplane, and one airplane can be used in multiple flights

- **Flight Table**
  - Relationships: One airport can have many flights, but a flight belongs to one airport

## Tables

Here are the details of the tables and their relationships:

- **City Table**
  - Columns: id, name, created_at, updated_at

- **Airport Table**
  - Columns: id, name, address, city_id, created_at, updated_at
  - Relationships: City has many airports, and an Airport belongs to a city (one-to-many)

## Getting Started

- Clone the repository.
- Install dependencies using `npm install`.
- Set up environment variables in `.env`.
- Configure database in `src/config/config.json`.
- Initialize the database using `npx sequelize db:create` and `npx sequelize db:migrate`.

## Contact

For any questions or assistance, feel free to contact me at:
- Email: pratikprakhar2001@gmail.com

---

**Note:** Replace `<repository_url>`, `YOUR_DB_LOGIN_NAME`, `Your_DB_PASSWORD`, and other placeholders with actual information.
