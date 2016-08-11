/**
 * Created by designersingh on 8/11/16.
 */
'use strict';

var express = require('express'),
    app = express();


app.use(express.static('./app'));

// This route enables HTML5Mode by forwarding missing files to the index.html
app.all('*', function(req, res) {
    res.sendFile(__dirname + '/app/index.html');
});


app.listen(3000, function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('Listening on port 3000');
    }
});
