

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3787;
const cors = require('cors');

app.set("port", port);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended : true,
  })
);
app.use(cors());

app.get("/", (req, res) => {
    res.send('hi');
})

app.get('/sector/list', db.getSectorList)

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
  })