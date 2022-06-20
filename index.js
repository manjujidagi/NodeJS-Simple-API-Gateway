const express = require('express');
const app = express()
const axios = require('axios');
const cors = require('cors');

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

// if route starts with /item_types, redirect to http://localhost:3001
app.all('/item_types', async (req, res) => {
    let result;
    try {
        let axios_obj = {
            method: req.method,
            url: 'http://localhost:3001' + req.originalUrl,
            data: req.body
        }
        if(req?.headers?.authorization) {
            axios_obj.headers = {
                'Authorization': req.headers.authorization
            }
        }
        result = await axios(axios_obj);
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
})
app.all('/item_types/*', async (req, res) => {
    let result;
    try {
        let axios_obj = {
            method: req.method,
            url: 'http://localhost:3001' + req.originalUrl,
            data: req.body
        }
        if(req?.headers?.authorization) {
            axios_obj.headers = {
                'Authorization': req.headers.authorization
            }
        }
        result = await axios(axios_obj);
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
});

// if route starts with /countries, redirect to http://localhost:3001
app.all('/countries', async (req, res) => {
    let result;
    try {
        let axios_obj = {
            method: req.method,
            url: 'http://localhost:3001' + req.originalUrl,
            data: req.body
        }
        if(req?.headers?.authorization) {
            axios_obj.headers = {
                'Authorization': req.headers.authorization
            }
        }
        result = await axios(axios_obj);
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
})
app.all('/countries/*', async (req, res) => {
    let result;
    try {
        let axios_obj = {
            method: req.method,
            url: 'http://localhost:3001' + req.originalUrl,
            data: req.body
        }
        if(req?.headers?.authorization) {
            axios_obj.headers = {
                'Authorization': req.headers.authorization
            }
        }
        result = await axios(axios_obj);
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
});

// if route starts with /organizations, redirect to http://localhost:3001
app.all('/organizations', async (req, res) => {
    let result;
    try {
        let axios_obj = {
            method: req.method,
            url: 'http://localhost:3001' + req.originalUrl,
            data: req.body
        }
        if(req?.headers?.authorization) {
            axios_obj.headers = {
                'Authorization': req.headers.authorization
            }
        }
        result = await axios(axios_obj);
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
});
app.all('/organizations/*', async (req, res) => {
    let result;
    try {
        let axios_obj = {
            method: req.method,
            url: 'http://localhost:3001' + req.originalUrl,
            data: req.body
        }
        if(req?.headers?.authorization) {
            axios_obj.headers = {
                'Authorization': req.headers.authorization
            }
        }
        result = await axios(axios_obj);
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
});



// if route starts with /auth, redirect to http://localhost:3000
app.all('/auth/*', async (req, res) => {
    // res.redirect('http://localhost:3000' + req.originalUrl);
    let result;
    try {
        let axios_obj = {
            method: req.method,
            url: 'http://localhost:3000' + req.originalUrl,
            data: req.body
        }
        if(req?.headers?.authorization) {
            axios_obj.headers = {
                'Authorization': req.headers.authorization
            }
        }
        result = await axios(axios_obj);
    } catch(e) {
        return res.status(e.response.status).send(e.response.data)
    }
    return res.status(result.status).send(result.data)
});

app.listen(5000, () => {
    console.log("Simple API Gateway Started on port 5000");
})