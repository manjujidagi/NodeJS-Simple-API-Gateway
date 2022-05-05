const express = require('express');
const app = express()
const axios = require('axios');

// if route starts with /item_types, redirect to http://localhost:3001
app.all('/item_types', async (req, res) => {
    let result;
    try {
        result = await axios({
            method: req.method,
            url: 'http://localhost:3001' + req.originalUrl,
            headers: {
                'Authorization': req.headers.authorization
            }
        });
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
})
app.all('/item_types/*', async (req, res) => {
    let result;
    try {
        result = await axios({
            method: req.method,
            url: 'http://localhost:3001' + req.originalUrl,
            headers: {
                'Authorization': req.headers.authorization
            }
        });
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
});

// if route starts with /countries, redirect to http://localhost:3001
app.all('/countries', async (req, res) => {
    let result;
    try {
        result = await axios({
            method: req.method,
            url: 'http://localhost:3001' + req.originalUrl,
            headers: {
                'Authorization': req.headers.authorization
            }
        });
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
})
app.all('/countries/*', async (req, res) => {
    let result;
    try {
        result = await axios({
            method: req.method,
            url: 'http://localhost:3001' + req.originalUrl,
            headers: {
                'Authorization': req.headers.authorization
            }
        });
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
});

// if route starts with /organizations, redirect to http://localhost:3001
app.all('/organizations', async (req, res) => {
    let result;
    try {
        result = await axios({
            method: req.method,
            url: 'http://localhost:3001' + req.originalUrl,
            headers: {
                'Authorization': req.headers.authorization
            }
        });
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
});
app.all('/organizations/*', async (req, res) => {
    let result;
    try {
        result = await axios({
            method: req.method,
            url: 'http://localhost:3001' + req.originalUrl,
            headers: {
                'Authorization': req.headers.authorization
            }
        });
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
});



// if route starts with /auth, redirect to http://localhost:3000
app.all('/auth/*', (req, res) => {
    res.redirect('http://localhost:3000' + req.originalUrl);
});

app.listen(5000, () => {
    console.log("Simple API Gateway Started on port 5000");
})