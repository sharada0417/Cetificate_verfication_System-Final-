const express = require('express')
const app = express();
const mongoose = required('mongoose')

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/cetificateVerify')
then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`Server is sunning on ${port}`)
})