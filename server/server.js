const express = require("express");
const app = express();

const path = require("path");

app.use(express.json());



app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use((req, res, next) => {
    console.log(`${req.method} | ${req.url}`);
    console.log(req.session);
    next();
});

app.use(
    express.urlencoded({
        extended: false,
    })
);


app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
