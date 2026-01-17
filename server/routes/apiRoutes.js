const express = require('express');
const router = express.Router();
const { bookDemo } = require('../controllers/demoController');
const { submitContact } = require('../controllers/contactController');

// Demo Booking Route
router.post('/demo/book', bookDemo);

// Contact Route
router.post('/contact', submitContact);

module.exports = router;
