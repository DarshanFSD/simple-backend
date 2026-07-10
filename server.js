const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from my backend!" });
});

app.get("/about", (req, res) => {
  res.json({
    name: "Darshan",
    course: "AI Fluency",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/time", (req, res) => {
  const indiaTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  res.json({
    timezone: "Asia/Kolkata",
    time: indiaTime,
  });
});