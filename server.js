const express = require('express');
const app = express();
const port = 5000;

app.get('/welcome/:nama?', (req, res) => {
    const nama = req.params.nama || 'Anonymous';
    res.send(`Selamat datang ${nama}`);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});