# Welcome to Flights Service

## Project Setup

Get started with the Flights Service by following these simple steps:

1. **Clone the Project:**
   Clone the project repository to your local machine using the following command:
   ```
   git clone <repository_url>
   ```

2. **Install Dependencies:**
   Navigate to the root directory of the downloaded project and install the necessary dependencies by running:
   ```
   npm install
   ```

3. **Create .env File:**
   In the root directory of the project, create a file named `.env` and add the following environment variable:
   ```
   PORT=3000
   ```

4. **Configure Database:**
   Inside the `src/config` folder, create a new file named `config.json`. Add the following configuration snippet, replacing placeholders with your actual database credentials:
   
   ```json
   {
     "development": {
       "username": "YOUR_DB_LOGIN_NAME",
       "password": "Your_DB_PASSWORD",
       "database": "Flight_and_search_DB",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

5. **Create Database:**
   Open a terminal and navigate to the `src` folder. Execute the following commands to create the database and run migrations:
   ```
   npx sequelize db:create
   npx sequelize db:migrate
   ```

## Usage

Once the setup is complete, you can start the server using:
```
npm start
```

The Flights Service will run on port 3000. You can then access the API endpoints for flight booking and querying.

## Contributing

If you'd like to contribute to the project, follow these steps:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m "Add new feature"`.
4. Push to your forked repository: `git push origin feature-name`.
5. Create a pull request on GitHub.

## Contact

For any questions or assistance, feel free to contact us at:
- Email: pratikprakhar2001@gmail.com

---

**Note:** Replace `<repository_url>`, `YOUR_DB_LOGIN_NAME`, `Your_DB_PASSWORD`, and other placeholders with actual information.