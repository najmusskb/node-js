// Make express server 
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('simple node server running ');
});

app.use(cors());
app.use(express.json());

const users = [

    { id: 1, name: 'sakib', email: 'sakib173@gmail.com' },
    { id: 2, name: 'sabana', email: 'sabana@gmail.com' },
    { id: 3, name: 'sabnum', email: 'sabnum@gmail.com' },

];



// username: Admin 1
// password : 4Uo7fzG4Ylhucko6

const uri = "mongodb+srv://Admin1:4Uo7fzG4Ylhucko6@cluster0.jrurpuf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("SimpleNode").collection("Users");
    // perform actions on the collection object
    console.log('database connected');
    client.close();
});







app.get('/users', (req, res) => {
    res.send(users)
})



app.post('/users', (req, res) => {
    // console.log('post api call')
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(user)
    res.send(user);
})



app.listen(port, () => {
    console.log(`simple node server on running on port ${port} `);
})