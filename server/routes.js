const express = require('express');

const router = express.Router();

// GET /Todos
router.get('/todos', (req, res) => {
    res.status(200).json({msg : "GET REQUEST TO /api/todos"});
});

// POsT /Todos
router.post('/todos', (req, res) => {
    res.status(201).json({msg : "POST REQUEST TO /api/todos"});
});

//DELETE /Todos/:id
router.delete('/todos/:id', (req, res) => {
    res.status(200).json({msg : "DELETE REQUEST TO /api/todos"})
});

// PUT /Todos/:id
router.put('/todos/:id', (req, res) => {
    res.status(200).json({msg : "PUT REQUEST TO /api/todos"})
});

module.exports = router;


