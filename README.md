Got it! Let’s make your README **professional, clear, and structured**, but still sound like a **learner who understands what they’ve built**. Here’s the revised version:

---

# ACM E-Commerce Website

## Overview

This is a full-stack e-commerce website built as part of an ACM final round project.
It allows users to **register, log in, browse products, add items to a cart, and checkout**.
The backend uses **Node.js, Express, and MongoDB**, while the frontend is built with **React + Vite**.
Authentication is handled with **JWT**, and the site keeps track of users’ order history.

---

## Features

* **User Authentication**: Users can register and log in securely.
* **Product Browsing**: View products with their name, description, price, and image.
* **Cart**: Add and remove products.
* **Checkout**: Simulated checkout with a success message (no real payments).
* **Order History**: Users can see their past orders.
* **Responsive Design**: Works on desktop and mobile.
* **Loaders**: Basic loading indicators to improve user experience.

---

## Tech Stack

* **Frontend**: React (Vite), Axios, React Router DOM
* **Backend**: Node.js, Express, MongoDB Atlas
* **Authentication**: JWT + bcrypt for secure password storage
* **Database**: MongoDB

---

## Project Structure

```
ACM_ecommerce/
 ├─ client/               # React frontend
 │   ├─ src/
 │   │   ├─ pages/        # Login, Register, Products, Cart, Orders
 │   │   ├─ context/      # CartContext.jsx
 │   │   ├─ App.jsx
 │   │   ├─ main.jsx
 │   │   └─ index.css
 │   ├─ package.json
 │   └─ vite.config.js
 ├─ server/               # Express backend
 │   ├─ models/           # User, Product, Order schemas
 │   ├─ routes/           # Auth, Products, Orders
 │   ├─ middleware/       # Auth middleware
 │   ├─ index.js          # Server entry point
 │   ├─ package.json
 │   └─ .env              # MongoDB URI and JWT_SECRET
 ├─ .gitignore
 └─ README.md
```

---

## Installation & Running Locally

### Backend

1. Go to the server folder:

```bash
cd server
npm install
```

2. Create a `.env` file with the following:

```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
```

3. Start the backend server:

```bash
npx nodemon index.js
```

Server will run at: `http://localhost:5000`

---

### Frontend

1. Go to the client folder:

```bash
cd client
npm install
npm run dev
```

Frontend will run at: `http://localhost:5173`

---

## How to Use

1. **Register** a new account at `/register`
2. **Login** at `/login`
3. Browse products at `/` and **add items to the cart**
4. View your **cart** at `/cart` and proceed to **checkout**
5. Orders are saved and can be viewed on the **Orders page**

---

## Notes

* Checkout is simulated — there’s no real payment integration.
* JWT is stored in localStorage for authentication on protected routes.
* Make sure your **MongoDB Atlas cluster** allows connections from your current IP.

---

## Learning Reflection

This project helped me understand:

* How to **connect frontend and backend** with REST APIs.
* Implementing **JWT-based authentication**.
* Managing **state globally** using React Context.
* Structuring a **full-stack project** for real-world functionality.

It was a hands-on exercise in building a complete e-commerce workflow, from authentication to cart management and order tracking.