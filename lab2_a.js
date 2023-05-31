const express = require ('express');
const app = express();
const router = express.Router();

const now = new Date();

const date = require('date-and-time')
const value = date.format(now,'YYYY/MM/DD HH:mm:ss');

router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

router.get('/home', (req, res) => {
    res.send("Hello Duc Anh");
});

router.get('/profile', (req, res) => {
    res.send("Welcom profile Duc Anh");
});

router.get('/login', (req, res) => {
    res.send("Welcom login Duc Anh");
});

router.get('/logout', (req, res) => {
    res.send("Welcom logout Duc Anh");
});

app.use('/api', router);
app.listen(process.env.port || 9000 );
console.log("Current date and time: " + value);
console.log('Server running on port' + (process.env.port || 9000));

// ************************************************************************************
// ************************************************************************************

// router.get('/', function(req, res) {
//     throw new err();
//     res.send("Welcom Duc Anh");
// });

// app.use('/', router);

// app.use(function(err, req, res, next) {
//    console.log(err.stack); 
//    res.status(500).send({"Error": err.stack});
// });

// app.listen(9000);



