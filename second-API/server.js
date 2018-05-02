var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 

var ingredients = [
    
    {
        "id": "234kAk",
        "text": "Eggs"
    },
    
     
    {
        "id": "234kbw",
        "text": "Milk"
    },
    
       
    {
        "id": "234kuu",
        "text": "Bacon"
    },
    
     {
        "id": "234kuu",
        "text": "Bacon"
    },
    
    {
        "id": "234kst",
        "text": "Frogs Legs"
    }]; 

app.get('/', function(request,response){
        
    response.send(ingredients); 
        });


app.post('/', function(request,response){
    var ingredient = request.body; 
if (!ingredient || ingredient.text === ""){
    response.status(500).send({error:"Your ingredient must have a text"}); 
  }else{
      ingredients.push(ingredient); 
      response.status(200).send(ingredients); 
      
  }

} ); 


app.listen(3000,function(){
    console.log("First API running on port 3000"); 
    
});