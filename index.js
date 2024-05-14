

// const express = require('express');
// const app = express();
// const port=5000;

// app.use(express.json())




// app.get('/',(req,res)=>{
//     res.send("hello worldsdfsdf")
// })

// let product=[{
//     id:1,
//     name:"laptop",
//     price:"10000",


// },
// {
//     id:2,
//     name:"laptop AUS",
//     price:"210000",


// },

// ]

// app.get('/getProduct',(req,res)=>{
//     try{
// res.send(product)
//     }
//     catch(error){
//         console.log(error);
//     }
// })

// app.post('/postdata',(req,res)=>{
//     try{
// const{id,name,price}=req.body;
// product.push({id:id,name:name,price:price});
// res.send("data added successfully");
//     }catch(error){
// console.log(error);
//     }
// })


// //put

// app.put('/updatedata',(req,res)=>{
//     try{
// const{id}=req.params.id;
// const{name,palce}=req.body;
// const newData=product.map((item)=>{
//     if(item.id==parseInt(id)){
//         return{...item,name,palce}
//     }
//     return item
// })             
//  product=newData;
//  console.log(newData);
                
//     }
//     catch{
//         console.log(error);
//     }
// })

// app.delete('/deletedata/:id', (req, res) => {
//     try {
//         const { id } = req.params;
//         let newData = product.filter((item) => item.id != parseInt(id));

//         console.log(newData);
//         if (newData.length !== product.length) {
//             product = newData;
//             console.log(product);
//             res.send("data deleted successfully");
//         } else {
//             res.status(404).send("data not found");
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("internal server error");
//     }
// });







// app.listen(port,()=>{
//     console.log("server is running on port",port);
//     })  
    



    const express=require('express')
    const cors=require('cors')
    const app=express();
 const userModel=require('./model/userModel')
    app.use(express.json())


    const port=6000;



    const mongoose=require('mongoose')
    app.use(cors())

    mongoose.connect('mongodb://localhost:27017/mongodbSample')
    .then(()=>(
        console.log("connected to mongo database successfully")
    ))
    .catch(err=>{
        console.log(err);
    })

    
    app.listen(port,()=>{
        console.log("server is running on port",port);
    })


    app.post('/postdata',async(req,res)=>{
        try{
            const{name,place,email,password}=req.body;
            const user = userModel.create({name,place,email,password});
            console.log(user);
            res.send("data added successfully");

         }
         catch(err){
            console.log(err+"error in post data");
         }
    })


    app.get('/',(req,res)=>{
        res.send("hello world")
    })

    app.get('/getdata', async (req, res) => {
        try {
            const getUsers = await userModel.find();
            res.send(getUsers);
            console.log(getUsers);
        } catch (err) {
            console.log(err);
            res.send("Server Error");
        }
    });