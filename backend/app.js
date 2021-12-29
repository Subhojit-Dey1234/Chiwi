require("dotenv").config();
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const UsersBackend = require('./models/Users.js')
const express = require("express");
const mongoos = require("mongoose")
const app = express();
const cors = require('cors');


app.use(cors());

app.use(express.json());

// Connecting to Database
const db = require("./config/keys.js").mongoURI;


mongoos.connect(db,{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>console.log("...Connected"))
.catch((err)=>console.log("Error",err))

const login = require('./auth/Login.js')


app.post('/signup', async (req, res) => {
    try {
      if(!req.body.mail) return res.status(500).send("Invalid User")
      const user = { mail: req.body.mail}

      const newUser = new UsersBackend(user);

      newUser.save().then(item => res.json({item : item,success:true}))
    } catch (err){
        console.log(err)
        res.status(500).send(err)
    }
  })


app.use('/auth',login)
app.listen(5000);
