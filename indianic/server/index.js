const express = require('express');
const app = express();

app.listen(4000, () => {
    console.log("Server running on port 4000");
});

const dbConnect = require("./db/dbConnect");
dbConnect();
