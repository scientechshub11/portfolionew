var express = require('express');
var app = express();
const cors = require('cors');
require('dotenv').config()
const sequelize = require('./config/configuration')
let port = process.env.PORT || 8080

console.log('Server is listening on port 8080');
app.use(express.static('static'))

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(cors())
const userRouter = require('./routes/user')
app.use('/user', userRouter);
// use res.render to load up an ejs view file
// sequelize.sync();
if(process.env.NOVE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.listen(port,()=>{
    `app listen to the port ${port}`
});
// https://www.youtube.com/watch?v=7il2CrBA5VY
