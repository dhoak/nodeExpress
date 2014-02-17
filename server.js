// server.js


// Declare node_module dependencies
var express 	= require('express');

// Declare instance of Express
var app			= express();
var port 		= process.env.PORT || 3000;

app.configure(function() {

		// set up our express application
		app.use(express.logger('dev')); // log every request to the console
        app.use(express.static(__dirname + '/app/public')); //Serves up static content (assets)
        app.set('views', __dirname + '/app/views'); //Location of Views/Markup
        app.set('view engine', 'html');
        app.use(express.cookieParser()); // read cookies (needed for auth)
        app.use(express.bodyParser()); // get information from html forms
        app.use(express.session({secret: 'SECRET'}));
});

// Routes
require('./app/routes.js')(app, passport);

// Launch
app.listen(port);
console.log('express app launched on port ' + port);


