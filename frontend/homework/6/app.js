const express = require('express');
const path =require('path');
const logger =require('./middleware/Logger');
const app= express();




app.use(logger);

// to use nodejs as rest (in json format) :-
// Body Parser Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api',require('./routes/api/posts'));


const PORT=process.env.PORT || 6000;
app.listen(PORT,()=>{
    console.log(`Application started on port ${PORT}`);
})