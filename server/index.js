const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const posts = require("./routes/api/lessons");

if (process.env.NODE_ENV === "production") {
  //static folder
  app.use(express.static(__dirname + "/public"));

  app.get(/.*/, (req,res) => res.sendFile(__dirname + '/puvlic/index.html'));
}

app.use("/api/lessons", posts);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
