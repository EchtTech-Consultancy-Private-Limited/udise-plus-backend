const cors = require("cors");
module.exports = (app,express) => {
  const corsOptions = {
    origin: process.env.WHITE_LIST_URL,
    optionsSuccessStatus: 200,
    credential:true
  };
  app.use(cors());
  app.use(express.json({ limit: "16kb" }));
  app.use(express.urlencoded({ extended: true, limit: "16kb" }));
};
