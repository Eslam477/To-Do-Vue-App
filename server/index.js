const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express();
//middleware
app.use(bodyparser.json());
app.use(cors());

const tasks = require('./api/tasks')
app.use('/api/tasks', tasks)


const port = process.env.port || 5000;
app.listen(port, () => { console.log(`server started at http://localhost:${port}`); })