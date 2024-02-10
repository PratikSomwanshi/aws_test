const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/home", (req, res) => {
    return res.json({
        msg: "API is live",
    });
});

app.listen(3005, () => {
    console.log("server running on port 3005");
});
