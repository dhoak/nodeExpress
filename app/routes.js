/**
 * Created by davidhoak on 2/17/14.
 */

module.exports = function(app, passport) {


    app.get('/', function(req, res) {
        res.render('index.html', res);
    });

};