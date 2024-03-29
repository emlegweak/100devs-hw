const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')

//load config
dotenv.config({path: './config/config.env'})

//passport config
require('./config/passport')(passport)

//database connection
connectDB()

const app = express()

//body-parser middleware to accept form data
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//method override 
app.use(methodOverride(function(req, res){
    if(req.body && typeof req.body === 'object' && '_method' in req.body){
        //look in urlencoded POST bodies and delete it
        let method = req.body._method
        delete req.body._method
        return method
    }
}))

//logging 
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//handlebars helpers
const { formatDate, stripTags, truncate, editIcon, select } = require('./helpers/hbs')

//setting view engine - handlebars
app.engine('.hbs', exphbs.engine({ helpers:{formatDate, stripTags, truncate, editIcon, select}, defaultLayout: 'main',extname: '.hbs'}))
app.set('view engine', '.hbs')

//sessions middleware
app.use(session({
    secret:'keyboard cat',
    //don't want to save a session if nothing is modified
    resave: false,
    //don't create a session until something is stored
    saveUninitialized: false,
    store: MongoStore.create({client: mongoose.connection.getClient()})
}))

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//set global variable (express)
app.use(function(req,res,next){
    res.locals.user = req.user || null
    next()
})

//define static folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

//port
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server running in ${process.env. NODE_ENV} mode on port ${PORT}, better go catch it...`))