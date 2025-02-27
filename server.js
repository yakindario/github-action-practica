const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log("Listening on " + port);
  });
}

module.exports = app;