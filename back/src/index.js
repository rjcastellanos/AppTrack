const express = require('express');
const cors = require("cors");
const app = express();
require('./db');

app.use(cors());
app.use(express.json());
app.set("port",4500);

app.use('/products', require('./routes/productRoute'));
app.use('/clients', require('./routes/clientRoute'));
app.use('/carrito', require('./routes/carritoRoute'));
app.use('/public', express.static(`${__dirname}/img`));

app.listen(app.get("port"), () => {
    console.log("Server listening")
});