const express = require('express')
let app = new express(); //express instance
let router = express.Router()
let port = 8007
let bodyParser = require('body-parser')
let db = require('./dbConnection').sequelize

app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
app.use(bodyParser.json());


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
});

app.set('views','./src/views');  //we will tell express that where we will store our views
app.set('view engine','ejs');  //we have to tell express; which template engine you are going to use?
let mainRoutes = require('./src/routes/homeRoutes')(app, router)
app.listen(port, function(err){
    if(err){
        console.log(err)
    }else{
        db.authenticate()
        .then(() => {
            console.log("db connected")
        })
        .catch((err) => {
            console.log(err,"error db connection")
        })
        console.log("Running on port "+port)
    }
})