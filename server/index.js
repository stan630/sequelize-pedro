const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors())

const db = require("./models");

PORT = 8088

// Routers
const studentRouter = require("./routes/student");
app.use("/student",studentRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});
