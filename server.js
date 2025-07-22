const express = require('express') ;
const mongoose = require('mongoose') ;
const cors = require('cors')
const dotenv = require('dotenv')
const authRoutes = require('./src/routes/authroutes')
const postRoutes = require('./src/routes/authroutes')
const errorHandler = require('')

dotenv.config() ;

// Create Express app instance 
const app = express()

// MiddleWares 
app.use(cors()) ;
app.use(express.json()) ;

app.use('/api/auth' , authRoutes) ;
app.use('/api/posts' , postRoutes) ;

// default path 
app.get('/', (req , res)=>{
  res.send('Api is working smoothly')
});

// Global error handler 
app.use(errorHandler) ;

mongoose.connect(process.env.MONGO_URI , {
  useNewUrlParser : true ,
  useUnifiedTopology : true 
})
.then(()=>{
  console.log("Mongodb connected successfully!!")

  const PORT = process.env.PORT || 5000 ;

  app.listen(PORT , ()=>{
      console.log('Server is running on : ${PORT}');
  })
})
.catch((err)=>{
  console.error('MongoDb connection failed' , err.message) ;
});
