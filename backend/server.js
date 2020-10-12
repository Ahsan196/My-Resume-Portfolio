const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

const uri =
  "mongodb+srv://ahsan:ahsan1396@resumeportfolio.nom6q.mongodb.net/projects?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const projectsRouter = require("./routes/projects");

app.use("/projects", projectsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
