const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
var server_port = process.env.PORT || 80;
var server_host = process.env.HOST || '0.0.0.0';
app.listen(server_port, server_host, () =>console.log('Listening on port %d', server_port));

app.get(`/User`, (request, response) => {
   var data =fs.readFileSync('./pdf.pdf');
   response.contentType("application/pdf");
   response.send(data);
   console.log(data);
 });

app.get(`/Test`, (request, response) => {
  
   response.send('data');
  
 });
