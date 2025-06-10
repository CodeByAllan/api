# 🧪 User API

A RESTful API for user authentication and management built with **Node.js**, **TypeScript**, **Express**, **PostgreSQL**, **Redis**, and **JWT**.

![GitHub last commit](https://img.shields.io/github/last-commit/codebyallan/user-api)
![GitHub license](https://img.shields.io/github/license/codebyallan/user-api)
![GitHub repo size](https://img.shields.io/github/repo-size/codebyallan/user-api)
![GitHub language count](https://img.shields.io/github/languages/count/codebyallan/user-api)

---

## 🚀 Features

- User login and registration 🔐
- JWT authentication middleware 🔑
- Role-based access control (admin or user) 🛡️
- Caching with Redis to improve performance ⚡
- Clean code architecture following SOLID and Object Calisthenics principles 🧠
- Health check endpoint for monitoring ❤️

---

## 🧠 What I Learned

- How to build custom Express middlewares to:
  - validate input data
  - handle output transformation
  - extract and validate tokens from headers
  - How to implement Redis caching to reduce database load
  - Full understanding and practical use of **all SOLID principles**
- Applied Object Calisthenics rules:
  - #2: Don’t use the else keyword
  - #5: One dot per line
  - #6: Don’t abbreviate
  - #7: Keep all entities small
  - #8: No classes with more than two instance variables
  - #9: No getters/setters/properties

---

## 🛠️ Tech Stack

**Backend:**

- Node.js
- TypeScript
- Express
- PostgreSQL
- TypeORM
- Redis
- JWT (JsonWebToken)

---

## 📘 API Documentation

### 🔐 Login

**POST** `/auth/login`

**Request Body:**

```json
{
  "username": "allan",
  "password": "123456"
}
```

---

### 👤 Create User

**POST** `/user`

**Request Body:**

```json
{
  "firstname": "allan",
  "lastname": "pereira",
  "username": "allan123",
  "password": "123456"
}
```

---

### 📋 Get All Users

**GET** `/user`
🔒 Requires authentication

---

### 🔍 Get User by ID

**GET** `/user/:id`
🔒 Requires admin or the user themself

---

### ✏️ Update User

**PATCH** `/user/:id`

**Request Body:**

```json
{
  "firstname": "allan",
  "lastname": "pereira",
  "username": "allan",
  "password": "123456",
  "usertype": "admin"
}
```

---

### 🗑️ Delete User

**DELETE** `/user/:id`
🔒 Requires admin or the user themself

---

### ❤️ Health Check

**GET** `/health`

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/codebyallan/user-api.git

# Install dependencies
npm install

# Create your .env file
cp .env.example .env

# Start the server dev
npm run dev
```

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE.md) file for details.

---

## 💡 Author

Made with ❤️ by **Allan Pereira**

[![GitHub](https://img.shields.io/badge/GitHub-codebyallan-black?logo=github)](https://github.com/codebyallan)
