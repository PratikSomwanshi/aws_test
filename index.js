const express = require("express");

const app = express();

app.get("/home", (req, res) => {
    return res.json({
        msg: "API is live",
    });
});

app.listen(3005, () => {
    console.log("server running on port 3005");
});
