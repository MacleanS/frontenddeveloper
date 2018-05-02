const express = require('express');


const app = express();

app.get('/answer', (req, res) => {
    const answerId = Number(req.query.id);
    if (answerId === 1 || answerId === 2 || answerId === 3) {
        res.status(200).send(JSON.stringify({
            result: [
                53 + Math.round(Math.random() * 10),
                8 + Math.round(Math.random() * 10),
                12 + Math.round(Math.random() * 10)
            ]
        }));
    }
    else {
        res.status(403).send(JSON.stringify({
            error: 'Invalid response, should be /answer?id=...'
        }));
    }
});

app.use(express.static('target/'));

export default app;
