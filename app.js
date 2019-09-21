var express=require("express");
var app=express();

app.use(express.static(__dirname +'/'));

app.get("/",function(req,res){
	res.sendfile("home.html");
});

app.get("/events",function(req,res){
	res.sendfile("events.html");
});

app.get("/fun",function(req,res){
	res.sendfile("fun.html");
});

app.get("/about",function(req,res){
	res.sendfile("about.html");
});

app.get("/workshops",function(req,res){
	res.sendfile("workshops.html");
});

app.get("/contact",function(req,res){
	res.sendfile("contact.html");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);