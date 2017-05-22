const express = require("express");
const app = express();

app.get("/", (req, res) => {
    const response = {};
    response.ipaddress = req.ip;
    res.send(response);
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Connected to port: ${process.env.PORT || 3000}`);
});
