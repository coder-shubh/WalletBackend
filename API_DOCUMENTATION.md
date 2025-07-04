# Wallet Backend API Documentation

Base URL: `http://localhost:5000/api/v1`

## Authentication Endpoints

### 1. User Registration
**POST** `/auth/register`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 2. User Login
**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Wallet Endpoints (Requires Authentication)

### 3. Get Wallet Balance
**GET** `/wallet/balance`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response:**
```json
{
  "balance": 1500.00
}
```

### 4. Add Money to Wallet
**POST** `/wallet/add-money`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Request Body:**
```json
{
  "amount": 500.00,
  "paymentMethod": "Credit Card"
}
```

**Response:**
```json
{
  "message": "Money added successfully",
  "newBalance": 2000.00
}
```

## Transaction Endpoints (Requires Authentication)

### 5. Get Transaction History
**GET** `/transactions`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response:**
```json
[
  {
    "_id": "64a1b2c3d4e5f6789012345",
    "userId": "64a1b2c3d4e5f6789012346",
    "amount": 500.00,
    "type": "credit",
    "method": "Credit Card",
    "status": "completed",
    "createdAt": "2025-07-03T10:30:00.000Z",
    "updatedAt": "2025-07-03T10:30:00.000Z"
  },
  {
    "_id": "64a1b2c3d4e5f6789012347",
    "userId": "64a1b2c3d4e5f6789012346",
    "amount": 200.00,
    "type": "debit",
    "method": "UPI",
    "status": "completed",
    "createdAt": "2025-07-02T15:45:00.000Z",
    "updatedAt": "2025-07-02T15:45:00.000Z"
  }
]
```

### 6. Get Specific Transaction
**GET** `/transactions/:id`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response:**
```json
{
  "_id": "64a1b2c3d4e5f6789012345",
  "userId": "64a1b2c3d4e5f6789012346",
  "amount": 500.00,
  "type": "credit",
  "method": "Credit Card",
  "status": "completed",
  "createdAt": "2025-07-03T10:30:00.000Z",
  "updatedAt": "2025-07-03T10:30:00.000Z"
}
```

## Error Responses

### 400 Bad Request
```json
{
  "message": "Invalid amount"
}
```

### 401 Unauthorized
```json
{
  "message": "No token, authorization denied"
}
```

### 404 Not Found
```json
{
  "message": "Wallet not found"
}
```

### 500 Internal Server Error
```json
{
  "message": "Server error",
  "error": "Error details here"
}
```

## Payment Methods Supported
- Credit Card
- Debit Card
- Bank Transfer
- UPI
- PayPal

## Transaction Types
- `credit`: Money added to wallet
- `debit`: Money deducted from wallet

## Transaction Status
- `pending`: Transaction is being processed
- `completed`: Transaction completed successfully
- `failed`: Transaction failed