const express= require('express');
const app = express();
const path= require('path');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname,"views")));

app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,"views","index.html"));
})

app.post('/',(request,response)=>{
    console.log(request.body);
    response.sendFile(path.join(__dirname,"views","index.html"));
})

app.listen(2080,()=>{
    console.log('server is running');
});