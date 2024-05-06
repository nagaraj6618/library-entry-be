const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');


function dbConnection (){
      mongoose.connect(process.env.MONGODB_URL)
      .then(()=>console.log("DB Connection Successful"))
      .catch((error) => console.log("DB Connection failed",error))
}
dbConnection();

app.use(cors({origin:true,credentials:true}));
app.use(express.json());

app.get('/api/v1/',(req,res) => {
   res.status(200).json({message:'Working',status:"Success"});
})

app.listen(PORT,()=> console.log(`Server running at http://localhost:${PORT}/`))