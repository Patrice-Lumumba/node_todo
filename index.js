const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));