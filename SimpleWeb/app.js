const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
    var today = new Date();
    var datetime = (today.getDate() + "/"
        + (today.getMonth() + 1) + "/"
        + today.getFullYear() + " @ "
        + today.getHours() + ":"
        + today.getMinutes() + ":"
        + today.getSeconds());

    res.send('Hello simple Web page! <br/> Current Time: ' + datetime);
});