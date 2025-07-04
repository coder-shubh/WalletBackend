# Wallet Backend API

A Node.js REST API for the Wallet mobile application built with Express.js and MongoDB.

## Features

- User authentication (JWT)
- Wallet balance management
- Transaction history
- Payment processing integration
- Secure API endpoints

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Stripe for payment processing

## Setup Instructions

1. **Clone and Install Dependencies**
   ```bash
   cd WalletBackend
   npm install
   ```

2. **Environment Configuration**
   - Copy `.env.example` to `.env`
   - Update the environment variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/walletapp
   JWT_SECRET=your_super_secret_jwt_key
   PORT=5000
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   ```

3. **Start MongoDB**
   Make sure MongoDB is running on your system.

4. **Run the Server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login

### Wallet (Protected)
- `GET /api/v1/wallet/balance` - Get wallet balance
- `POST /api/v1/wallet/add-money` - Add money to wallet

### Transactions (Protected)
- `GET /api/v1/transactions` - Get transaction history
- `GET /api/v1/transactions/:id` - Get specific transaction

## Testing the API

You can test the API using tools like Postman or curl:

### 1. Register a new user
```bash
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### 2. Login
```bash
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### 3. Get balance (use token from login)
```bash
curl -X GET http://localhost:5000/api/v1/wallet/balance \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 4. Add money
```bash
curl -X POST http://localhost:5000/api/v1/wallet/add-money \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"amount":500,"paymentMethod":"Credit Card"}'
```

## Project Structure

```
WalletBackend/
├── controllers/          # Route handlers
│   ├── authController.js
│   ├── walletController.js
│   └── transactionController.js
├── models/              # Database models
│   ├── User.js
│   ├── Wallet.js
│   └── Transaction.js
├── routes/              # API routes
│   ├── auth.js
│   ├── wallet.js
│   └── transactions.js
├── middleware/          # Custom middleware
│   └── auth.js
├── config/              # Configuration files
├── services/            # Business logic services
├── server.js            # Main server file
├── package.json         # Dependencies and scripts
└── .env.example         # Environment variables template
```

## Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Protected routes with middleware
- Input validation
- CORS enabled

## Future Enhancements

- Rate limiting
- Input sanitization
- Payment gateway integration (Stripe, PayPal)
- Email notifications
- Transaction webhooks
- Admin dashboard APIs

## License

MIT