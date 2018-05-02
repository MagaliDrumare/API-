var express = require ('express'); 
var app = express (); 

app.get('/', function(req,res){
        
    res.send('My First API!'); 
        });

app.get('/tatayoyo', function(req, res){
    res.send('Tata Yoyo ça fait ding ding comme une samba'); 
});

app.listen(3000,function(){
    console.log("First API running on port 3000"); 
    
});