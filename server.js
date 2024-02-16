const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
require('./utils/express')(app,express);
app.use("/api/v1", require('./routes/index'));

const PORT =process.env.PORT || 4600


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})