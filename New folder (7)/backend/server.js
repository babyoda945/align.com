const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  // Simulate saving user (replace with DB logic later)
  console.log("New user:", { username, email });

  res.json({ success: true, message: "User signed up successfully!" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
