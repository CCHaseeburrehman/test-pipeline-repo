// pr-vulnerable-test.js
const express = require("express");
const app = express();

app.get("/cmd", (req, res) => {
    require("child_process").exec("ping " + req.query.host);
});

const API_KEY = "test-api-key-123456";
const DB_PASSWORD = "supersecretpassword123";