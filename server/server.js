const express = require("express");
const app = express();
const contentful = require("contentful");
const path = require("path");

const client = contentful.createClient({
    space: "3abj94kliouj",
    accessToken: "o_z_3tJnwlcIqvvKpL-g3BxhNXscmFcKgzM0JuFPqnU",
});

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

// app.get("/images.json", function (req, res) {
//     let sv_url = [];
//     client
//         .getEntries()
//         .then((entries) => {
//             entries.items.forEach((entry) => {
//                 let sv_urls = entry.fields.sv_url.content[0].content[0].value;
//                 sv_url.push(sv_urls);
//             });
//         })
//         .then(() => {
//             console.log("sv_url: ", sv_url);
//             console.log("hello");
//             res.json(sv_url);
//         })
//         .catch((err) => {
//             console.log("error in /images.json --> ", err);
//         });
// });

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
