const express = require("express");
const app = express();

app.get("/", (req, res) => {
    const response = {};
    response.ipaddress = req.ip.includes("::ffff:") ? req.ip.substr(7) : req.ip;
    response.language = req.get("accept-language").split(",")[0];
    const softwareInfo = req.get("user-agent").match(/\(.+\)/g)[0];
    response.software = softwareInfo.substr(1, softwareInfo.length - 2);
    res.send(response);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Connected to port: ${process.env.PORT || 3000}`);
});
