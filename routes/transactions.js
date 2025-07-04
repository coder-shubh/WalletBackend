const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/auth');

// Protect all transaction routes
router.use(authMiddleware);

// Get transaction history
router.get('/', transactionController.getTransactions);

// Get specific transaction
router.get('/:id', transactionController.getTransaction);

module.exports = router;