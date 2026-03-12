# Middleware Practical – Node.js Express Middleware Chain Project

## 🌐 Live Demo
https://middleware-practical.onrender.com/profile?token=1234

## 📬 Postman Documentation
https://fardinsaluji-2836416.postman.co/workspace/fardin-saluji's-Workspace~e97d20b3-8255-42ec-8afe-4e2fff9b6306/request/49870578-6d990040-e156-4770-9072-72328eda0f17?action=share&creator=49870578&ctx=documentation

---

## 📌 Project Description

This project demonstrates how middleware works in Node.js and Express.js by building a protected route system using a middleware chain.

The application includes:

- Authentication middleware to protect routes
- Timer middleware to measure request execution time
- Middleware chaining for secure and controlled route access
- Protected profile route that requires a valid token
- Express server deployed on Render

This project helps understand backend middleware flow, request lifecycle, and route protection.

---

## 🚀 Features

- Middleware chain implementation
- Authentication using token verification
- Request execution time logging
- Protected route access control
- Modular folder structure
- REST API architecture
- Render deployment

---

## 🧠 Concepts Covered

- Express.js Middleware
- Middleware chaining
- Authentication middleware
- Route protection
- Request lifecycle
- Backend architecture
- Node.js server deployment

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript
- Render (Deployment)
- Postman (API Testing)

---

## 📂 Folder Structure

```
middleware-practical
│
├── middlewares
│   ├── authMiddleware.js
│   └── timerMiddleware.js
│
├── routes
│   └── profile.js
│
├── app.js
├── package.json
├── package-lock.json
└── node_modules
```

---

## ⚙️ How It Works

The request flow follows this middleware chain:

1. Client sends request to protected route `/profile`
2. Timer middleware starts execution timer
3. Authentication middleware verifies token
4. If token is valid → access granted
5. Profile route sends response
6. Timer middleware logs execution time

---

## 🔐 Protected Route Example

### Request
```
GET /profile?token=1234
```

### Response
```
Welcome to your profile page
```

---

## ▶️ Installation and Setup

### Step 1: Clone repository

```
git clone https://github.com/yourusername/middleware-practical.git
```

### Step 2: Go to project folder

```
cd middleware-practical
```

### Step 3: Install dependencies

```
npm install
```

### Step 4: Run server

```
node app.js
```

Server will run on:

```
http://localhost:5000
```

---

## 🌍 Deployment

This project is deployed on Render:

```
https://middleware-practical.onrender.com
```

---

## 🧪 Testing with Postman

Test protected route:

```
GET https://middleware-practical.onrender.com/profile?token=1234
```

---

## 📈 Future Improvements

- JWT authentication
- Role-based authorization
- Database integration
- Logging system
- Error handling middleware
- Production-level security

---

## 👨‍💻 Author

Fardin Saluji  
Full Stack Developer (MERN Stack)  
Mumbai, India

---

## 📄 License

This project is for learning and educational purposes.
