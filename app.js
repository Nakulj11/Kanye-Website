//jshint esversion: 6

var imageLinks = ["https://media.tenor.com/images/3df1c20ffe97753deff6b0ebd56009d4/tenor.png",
"https://consequence.net/wp-content/uploads/2014/08/kanye-grumpy.jpg?quality=80",
"https://i.pinimg.com/736x/d8/58/3f/d8583fe287203342606b495f3045209a.jpg",
"https://i.pinimg.com/736x/4a/86/3c/4a863c2f739f7148cd2a49d1923eeb6b.jpg",
"https://i.pinimg.com/736x/97/f6/79/97f679668bc3ab9eaaa45f0af0e37011.jpg",
"https://i.redd.it/bxaqd80sfhk41.jpg",
"https://i.pinimg.com/originals/cb/7f/d1/cb7fd1aaf24a5fa06289691568dd0873.jpg",
"https://i.pinimg.com/236x/cf/08/d0/cf08d07c40abe81de0464ec465882599--kanye-west-larger.jpg",
"https://i.pinimg.com/originals/56/bb/49/56bb49bf62360824438e089015dd81f1.jpg",
"https://i.pinimg.com/originals/ad/71/13/ad7113b3b6333d0583f91cf81fd8e56d.png"
];

const express = require("express");
const app = express();
const https = require("https");

var quote;
var size;
var n;

app.get("/", function(req, res){
  url = "https://api.kanye.rest/?format=text";
  https.get(url, function(response){
    quote = '';
    response.on("data", function(data){
      quote+=data;
    });

    response.on("end", function(){
      size = imageLinks.length;
      n = Math.floor(Math.random() * size);
      res.send(`
        <h1><center>Kanye West Quote Generator<center></h1>
        <table style="width:100%">
          <tr>
            <td><img src=`+ imageLinks[n] + ` width="350" height="350"></td>
            <td><h3><q>`+quote+`</q> -Kanye West</h3></td>
          </tr>
        </table>

          <br>
          <br>
          <br>
          <center>
          <form class="" action="/" method="post">
            <button type="submit" name="button">Next Quote</button>
          </form>
          </center>


        `);
    });
  });
});

app.post("/", function(req, res){
  url = "https://api.kanye.rest/?format=text";
  https.get(url, function(response){
    quote = '';
    response.on("data", function(data){
      quote+=data;
    });

    response.on("end", function(){
      size = imageLinks.length;
      n = Math.floor(Math.random() * size);
      res.send(`
        <h1><center>Kanye West Quote Generator<center></h1>
        <table style="width:100%">
          <tr>
            <td><img src=`+ imageLinks[n] + ` width="350" height="350"></td>
            <td><h3><q>`+quote+`</q> -Kanye West</h3></td>
          </tr>
        </table>

          <br>
          <br>
          <br>
          <center>
          <form class="" action="/" method="post">
            <button type="submit" name="button">Next Quote</button>
          </form>
          </center>


        `);
    });
  });
});

app.listen(process.env.PORT||666, function(){
  console.log("Kanye West Quotes up and running");
});