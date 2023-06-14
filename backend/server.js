const express = require('express');
const app = express();
require('dotenv').config();

const routes = require("./routes/api"); 



const port = process.env.PORT;

app.use('/openai', routes);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}!`)
})