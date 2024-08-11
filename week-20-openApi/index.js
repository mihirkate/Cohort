"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
const openApiSpec_1 = require("./openApiSpec");
app.use(express_1.default.json());
let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];
app.get('/users', (req, res) => {
    const name = req.query.name;
    if (name) {
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
        res.json(filteredUsers);
    }
    else {
        res.json({
            "msg": "No user found "
        });
    }
});
// Log to confirm route registration
console.log('Registering Swagger UI at /documentation');
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(openApiSpec_1.openApiSpec));
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
