const Wallet = require('../models/Wallet');
const Transaction = require('../models/Transaction');

// Get wallet balance
exports.getBalance = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ userId: req.user.id });
    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }
    res.json({ balance: wallet.balance });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Add money to wallet
exports.addMoney = async (req, res) => {
  try {
    const { amount, paymentMethod } = req.body;
    
    // Validate amount
    if (amount <= 0) {
      return res.status(400).json({ message: 'Invalid amount' });
    }

    // In a real app, you would process payment here
    // For now, we'll just update the balance
    
    const wallet = await Wallet.findOneAndUpdate(
      { userId: req.user.id },
      { $inc: { balance: amount } },
      { new: true, upsert: true }
    );

    // Record transaction
    const transaction = new Transaction({
      userId: req.user.id,
      amount,
      type: 'credit',
      method: paymentMethod,
      status: 'completed'
    });
    await transaction.save();

    res.json({ 
      message: 'Money added successfully',
      newBalance: wallet.balance
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};