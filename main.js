const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

app.get(`/User`, (request, response) => {
   var data =fs.readFileSync('./pdf.pdf');
   response.contentType("application/pdf");
   response.send(data);
   console.log(data);
 });
