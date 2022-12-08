// Make express server 
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {

    res.send('simple node server running ');

});
app.listen(port, () => {

    console.log(`simple node server on running on port ${port} `);


})