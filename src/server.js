const express = require('express');
const app = express();
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const indexRouter = require('./routes/index');

const db = require('./models');
db.dbConnect.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

app.use('/',indexRouter);
app.use('/post',postRouter);
app.use('/user',userRouter);

app.use(express.json());

app.listen(3000,console.log('server started on 3000 port'));