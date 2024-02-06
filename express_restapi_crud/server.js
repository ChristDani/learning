const express = require('express');
const morgan = require('morgan');

const app = express();
let products = [
    {
        id: 1,
        name: 'laptop',
        price: 1989.99
    }
];

app.use(morgan('dev'));
app.use(express.json());

app.get('/products', (req, res) => {
    // res.send('getting products')
    res.json(products);
});

app.post('/products', (req, res) => {
    console.log({id: products.length + 1, ...req.body}); // con los 3 puntos antes del objeto, estamos copiando el objeto en otro, para poder modificar sus datos o manejarlos sin que se alteren los originales.

    const newproduct = {id: products.length + 1, ...req.body};

    products.push(newproduct) // una vez generado el nuevo item lo agregamos a nuestro arreglo.

    res.send(newproduct)
});

app.put('/products/:id', (req, res) => {
    const newData = req.body;
    const idproduct = req.params.id;
    const productFound = products.find((prdct) => prdct.id === parseInt(idproduct));

    if (!productFound) {
        return res.status(404).json({
            message: "Product not found"
        })
    }

    products = products.map(p => p.id === parseInt(idproduct) ? {...p, ...newData} : p);
    console.log(products);
    res.json({
        message: 'producto actualizado'
    })
});

app.delete('/products/:id', (req, res) => {
    const idproduct = req.params.id;
    const productFound = products.find((prdct) => prdct.id === parseInt(idproduct));

    if (!productFound) {
        return res.status(404).json({
            message: "Product not found"
        })
    }

    products = products.filter(p => p.id !== parseInt(idproduct));

    console.log(products);

    res.sendStatus(204); // con este codigo de estado le indicamos al cliente que todo a ido bien pero que no se enviará nada.
});

app.get('/products/:id', (req, res) => {
    const idproduct = req.params.id;
    console.log(idproduct);
    const productFound = products.find( function (prdct) {
        return prdct.id === parseInt(idproduct);
    })
    
    // const productFound = products.find((prdct) => prdct.id === parseInt(idproduct)); || variante con funcion flecha

    if (!productFound) {
        return res.status(404).json({
            message: "Product not found"
        })
    }

    console.log(productFound);
    res.json(productFound);
});

app.listen(3000, () => {console.log('server on port 3000');});