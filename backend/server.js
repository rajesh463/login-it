const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')//rajesh add

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));//rajesh add


const uri = process.env.ATLAS_URI;
const ExercisesRouter = require('./routes/ExercisesRoutes');
const RoleBaseAuth = require("./routes/RoleAssignRoutes");




mongoose.connect(uri, { useNewUrlParser: true });

const connection= mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb database connection established successfully !!");
})



app.use('/exercises', ExercisesRouter);//rajesh add 
app.use("/whoami",RoleBaseAuth);


app.listen(8080, () => {// i changed the port 
    console.log(`Server is running on port`);
});