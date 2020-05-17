const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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


app.post('/', (req, res) => {
    res.json({
        'metodo': 'POST'
    })
});

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Server on')
})