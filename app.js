const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv/config');
const api = process.env.API_URL;

const port = process.env.PORT ||8080

app.get('/api/v1/products',(req,res)=>{
    const product ={
        id:1,
        name:'hair dresser',
        image:'some_url',
    }
    res.send(product);
})
app.post('/api/v1/products',(req,res)=>{
   res.send(newProduct);
   console.log(newProduct);
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});