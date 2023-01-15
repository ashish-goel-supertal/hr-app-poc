const express = require('express');
const path = require('path');


const app = express();

const PORT = 3003;

// console.log(`path -->>`, path.join(__dirname, "build","index.html"));
app.use(express.static(path.join(__dirname, "build")));

app.get('*', async (req, res) => {
    console.log(`react app requested`)
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.listen(PORT, () => {
    console.log(`react server listenimng...`);
})