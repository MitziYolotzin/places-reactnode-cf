const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//read req obj body from data
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

const places = [{
        'title': 'Oficina',
        'description': 'Lorem',
        'address': 'Ipsum'
    },
    {
        'title': 'Oficina 2',
        'description': 'Lorem',
        'address': 'Ipsum'
    }
]

app.get('/', (req, res) => {
    res.json({
        places
    });
});

// req body, read arguments send
app.post('/', (req, res) => {
    res.json(req.body.nombre);
});

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Server on')
})