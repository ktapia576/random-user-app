const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', (req,res) => {
    res.send("<h1>Home page</h1>");
});

app.get('/users', (req,res) => {
    axios.get('https://randomuser.me/api/?page=1&results=10') //fetch a random users from API
        .then(response => { //Use response instead of res since it will overwrite res var on above method
            res.send(response.data);
        })
});

app.listen(3000, () => {
    console.log('server started on port 3000');
})