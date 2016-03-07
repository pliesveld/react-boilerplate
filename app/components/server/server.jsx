import express from 'express'
import reactentry from './react-entry'
import bodyParser from 'body-parser'
import exampleEndPoint from './rest/example'

var app = express();

app.use(bodyParser.json({
    limit: '15mb'
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '15mb'
}));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));

exampleEndPoint(app);

reactentry(app);

app.listen(3000, function () {
  console.log('Listening on port 3000.');
});