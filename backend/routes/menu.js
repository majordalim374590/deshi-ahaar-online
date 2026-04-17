'use strict';

const express = require('express');
const router = express.Router();

// Sample data representing menu items
const menuItems = [
    { id: 1, name: 'Pasta', category: 'Italian' },
    { id: 2, name: 'Sushi', category: 'Japanese' },
    { id: 3, name: 'Tacos', category: 'Mexican' },
    { id: 4, name: 'Burger', category: 'American' },
    { id: 5, name: 'Curry', category: 'Indian' }
];

// GET endpoint to fetch all menu items
router.get('/', (req, res) => {
    res.json(menuItems);
});

// GET endpoint to fetch menu items filtered by category
router.get('/category/:category', (req, res) => {
    const { category } = req.params;
    const filteredItems = menuItems.filter(item => item.category.toLowerCase() === category.toLowerCase());
    res.json(filteredItems);
});

module.exports = router;