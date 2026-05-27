# 🎵 Folk Tunes - Traditional Musical Instruments E-Commerce Platform

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge&logo=mongodb)
![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react)
![Node](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=nodedotjs)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

**Folk Tunes** is a full-stack e-commerce web application dedicated to preserving and promoting traditional folk musical instruments from various indigenous tribes of Assam (Bodo, Mishing, Karbi, Tiwa, Rabha, and Sonowal Kachari). 

> **🎓 Academic Context:** This project was developed as part of my prestigious internship at **NIELIT (National Institute of Electronics & Information Technology)**.

---

## ✨ Key Features

This platform features a robust **Role-Based Access Control (RBAC)** system with a unified authentication flow, catering to three distinct user types:

### 👤 1. Customers
* Browse authentic folk instruments categorized by tribe.
* Search functionality to find specific instruments.
* Add to cart, view detailed specifications, and checkout.
* View personal order history and track delivery status.

### 🏪 2. Suppliers
* Secure supplier dashboard to manage inventory.
* Add, update, and delete their specific products.
* View orders placed for their products.
* Mark individual items as "Delivered" once shipped.

### 🛡️ 3. Administrators
* Complete oversight of the platform.
* Manage all registered users, suppliers, and products.
* View all platform orders and monitor overall sales.

---

## 🛠️ Tech Stack

**Frontend:**
* React.js (Vite)
* React Router DOM (Dynamic Routing)
* Axios (API Integration)
* Bootstrap & Custom CSS (Responsive UI)
* React Hot Toast (Notifications)

**Backend:**
* Node.js & Express.js
* MongoDB & Mongoose (Database & ORM)
* JSON Web Tokens (JWT) (Secure Authentication)
* Bcrypt (Password Hashing)
* Multer (Image Uploads)

---

## 🚀 Installation & Local Setup

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone (https://github.com/Sahid1411/Folk-Tunes.git)
cd folk-tunes

2. Backend Setup
Bash
cd backend
npm install
Create a .env file in the backend directory and add the following:

Code snippet
PORT=4000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
Start the backend server:

Bash
npm run start

3. Frontend Setup
Open a new terminal window:

Bash
cd frontend
npm install
Create a .env file in the frontend directory:

Code snippet
VITE_API_URL=http://localhost:4000/api
Start the frontend development server:

Bash
npm run dev

👨‍💻 Author
Md. Sahid Ahmed

BCA Student, Dibrugarh University

LinkedIn: [ linkedin.com/in/your-profile](https://www.linkedin.com/in/sahid-ahmed-0505822b9/)

GitHub: [https://github.com/Sahid1411]

Portfolio: [your-portfolio-link.com](https://sahid1411.github.io/portfolio-website/)
