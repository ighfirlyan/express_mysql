const express = require('express')
const usersRoutes = require('./routes/users')
const middlewareLogRequest = require('./middleware/log')

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/assets', express.static('public/images'))

app.use('/users', usersRoutes);

app.use('/', (req, res)=>{
    res.send('Hello world')
})

app.listen(port, () => console.log(`Server is running on port ${port}!`));