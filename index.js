const express  = require('express');
const path = require('path');


const app = express();

app.use('/static',express.static(path.join(__dirname,'client/build/static')))


app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'/client/build/index.html'));
})

const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log("App works in port "+ port)
})
