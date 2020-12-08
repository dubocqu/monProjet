let express = require('express');
let app = express();
let port = 3000;


//Préparation du server
app.use(express.static(__dirname + '/www'));

app.listen(port, () => {
    console.log('Le serveur est en route');
    console.log(`Serveur listening at http://localhost:${port}`);
})


//Routes
app.get('/', (req, res, next) => {
    res.send('www/index.html');
});