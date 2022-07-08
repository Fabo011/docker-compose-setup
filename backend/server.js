const express = require('express');
const app = express();
const port = 3030;


app.get('/', function(req, res){ 
    res.send('Hello from backend');
   }); 

app.listen(port, () => {
    console.log(`Server running ${port}.`);
  });
