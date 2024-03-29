const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./Route/index");

const PORT = 5500;
const HOSTNAME = "localhost";

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

// Request Management
const app = express();
app.use(express.json());        // A body Parser Required to post a data
app.use(cors(corsOptions));

app.use('/', route);

// DB
const MongoAtlas = "mongodb+srv://jyotimane2705:QxwE52nAlracRUoL@nodeass.uicntdi.mongodb.net/Zomato_DB?retryWrites=true&w=majority&appName=NodeASS";

mongoose.connect(MongoAtlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => {
        app.listen(PORT, HOSTNAME, () => {
            console.log(`Server is running at ${HOSTNAME}: ${PORT}`)
        });
    })
    .catch(err => console.log(err));
