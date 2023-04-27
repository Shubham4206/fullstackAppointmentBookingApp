const express=require('express');
const app=express();
const router=require('./routes/routeadmin.js');
const bodyparser=require('body-parser');
const sequelize=require('./connection/database.js');
const cors=require('cors');
app.listen(4000);
app.use(cors());
app.use(bodyparser.json({extended:false}));
app.use(bodyparser.urlencoded({extended:false}));

app.use(router);
sequelize.sync();