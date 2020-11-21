const express = require("express");
const apiRouter = require("./routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use("/api", apiRouter);
app.listen(process.env.PORT || 4000, () => {
  console.log("Back-end Server is now working");
});
