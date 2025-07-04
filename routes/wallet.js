const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');
const authMiddleware = require('../middleware/auth');

// Protect all wallet routes
router.use(authMiddleware);

// Get wallet balance
router.get('/balance', walletController.getBalance);

// Add money to wallet
router.post('/add-money', walletController.addMoney);

module.exports = router;