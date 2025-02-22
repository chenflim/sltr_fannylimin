const express = require('express');
const app = express();
const port = 5000;

app.get('/welcome/:nama?', (req, res) => {
    const nama = req.params.nama || 'Anonymous';
    res.send(`Selamat datang ${nama}`);
});

//For testing
module.exports = app;

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
    });
}