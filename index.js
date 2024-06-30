const express = require("express");
const app = express();
const port = 5000;
const { RegisterService, LoginService } = require("./service");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Register
app.post("/register", async (req, res) => {
  await RegisterService(req.body);
  res.send("Successfully registered!");
});

// Login
app.post("/login", async (req, res) => {
  let result = await LoginService(req.body);
  if (result !== "Invalid username or password") {
    res.send("Successfully logged in!");
  } else {
    res.send(result);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
