const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde esta carpeta
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`FlowerTime listo en http://localhost:${PORT}`));
