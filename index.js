//Dependencies
const express = require('express');
const app = express();
app.use(express.json());
//Handling Get request for / URI
app.get('/', (req, res) => {
    res.send('Express App Running');
});

app.post('/recordTemp', (req, res) => {
    const sensorReading = req.query.temp || 0;
    const id = req.query.ID
    res.send('Sensor ID : ' + id + ', Sensor reading : ' + sensorReading);  
});



app.post('/handleJSON', (req, res) => {
    const temp = req.body.temp;
    const light = req.body.light;
    const UID = req.body.sensorID.UID;
    // res.send('Sensor 1 Reading : ' + temp + ', Sensor 2 reading : ' + light);  
    res.send('UID : ' + UID );  
});


//Deploying the listener
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Express server listening on port
${port}`));