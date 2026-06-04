// index.js

const express = require("express");
const crypto = require("crypto");
const app = express();


onst express = require("express");
const crypto = require("crypto");

const apiKey = "12345-abcde";
const dbPassword = "supersecretpassword123";

// SQL injection
app.get("/user", (req, res) => {
    const userInput = req.query.name;
    db.query("SELECT * FROM users WHERE name = '" + userInput + "'");
    res.send("User searched");
});

// Command injection
app.get("/ping", (req, res) => {
    const host = req.query.host;
    require("child_process").exec("ping " + host);
    res.send("Ping started");
});

// Weak crypto
const hash = crypto.createHash("md5").update("password").digest("hex");

// XSS sink
app.get("/page", (req, res) => {
    const name = req.query.name;
    res.send("<h1>Hello " + name + "</h1>");
});

app.listen(3000);

// pr-vulnerable-test.js
const express = require("express");
const app = express();

app.get("/search", (req, res) => {
    const q = req.query.q;
    res.send("<h1>" + q + "</h1>");
});

app.get("/cmd", (req, res) => {
    require("child_process").exec("ping " + req.query.host);
});

const API_KEY = "test-api-key-123456";
const DB_PASSWORD = "supersecretpassword123";