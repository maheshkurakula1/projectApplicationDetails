# first-project

> A Vue.js project


> In this project we had both frontend and backend code, where server is the seperate folder which holds backed.

> Backend is built with node.js and express.js,
> postgres is the database and used sequelize ORM to avoid sequelize injections, where you can install all the dependencies from       package.json.
> Migrations files were included to create a table as per project requirement, by running `sequelize db:migrate` you can get tables     in your database specified in .env file


> Front end is built with vue.js and easy to run by following steps

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


# for backed

    
    1. `cd server` (to enter into backend).
    2. `npm insatll` (for dependencies).
    3. edit .env file in servers and set database credentials.
    4. `sequelize db:migrate` (this command automatically creates a table in db)
    5. node app.js (run the server)