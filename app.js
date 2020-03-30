const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public")); 



app.get("/", function(req, res){
    
    res.render("index");
    
} );


app.get("/gradeQuiz", function(req,res){ 
    
    
    let score = 0;
    let q1, q2, q3, q4, q5, q6,q7, q8, message;
    q1 = q2 = q3 = q4 = q5 = q6 =q7 =q8 = "Wrong!";
    
    if (req.query.q1.toLowerCase() == "sacramento") {
        score += 20;
        q1 = "You got it!";
       
        
    }
    if (req.query.q2 == "ms") {
        score += 20;
        q2 = "You got it!";
    }
  if (req.query.q3a =="checked" , req.query.q3b =="checked" ,req.query.q3b != "checked" ,req.query.q3c != "checked"){
     
        score += 20; 
       q3 = "you got it";
   }
  
   if (req.query.q4 == "Rhode Island"){
       
      
    
        score += 20;  
       q4 = "you got it";
     }
    if(req.query.q5choice== "seal2"){
      score += 20;
       q5 = "you got it";
    }
    if(req.query.q6 == "50"){
       score += 20; 
       q6 = "you got it";
    }
   if (req.query.q7 == "d") {
        score += 20;
        f7 = "You got it!";
    }
     if (req.query.q8c =="checked" , req.query.q8d !="checked" ,req.query.q8a != "checked" ,req.query.q8b != "checked"){
     
        score += 20; 
        q8 = "you got it";
   }
  
  
    res.send( {"score": score, "feedback1":q1, "feedback2":q2, "feedback3":q3, "feedback4": q4, "feedback5": q5,"feedback6": q6,"feedback7": q7, "feedback8": q8 }); // display feedback 
    
    
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})