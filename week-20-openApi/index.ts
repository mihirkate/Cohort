import express from 'express';

const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
import { openApiSpec } from './openApiSpec';
app.use(express.json());

let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.get('/users', (req, res) => {
    const name = req.query.name as string;

    if (name) {
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(name.toLowerCase())
        );
        res.json(filteredUsers);
    } else {
        res.json({
            "msg": "No user found "
        });
    }
});

// Log to confirm route registration
console.log('Registering Swagger UI at /documentation');


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});