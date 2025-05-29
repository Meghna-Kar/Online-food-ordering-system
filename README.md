# 🍽️ Foodies - Online Food Delivery App

**Foodies** is a full-stack web application for browsing and ordering food online. It includes a customer-facing interface, an admin panel, and a backend API. It supports cart functionality, payment integration, and order management.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- CSS/Tailwind/Bootstrap (based on your styling)

**Backend:**
- Spring Boot (Java)
- MongoDB
- REST APIs

**Payments:**
- Razorpay Integration

---

## 📁 Folder Structure

FOODIES/
├── adminpanel/ # React Admin Dashboard
├── food/ # React User Frontend
├── foodiesapi/ # Spring Boot Backend API
├── node_modules/ # Ignored in .gitignore
├── README.md


---

## 🚀 How to Run Locally

### 👉 Backend (Spring Boot)
```bash
cd foodiesapi
mvn spring-boot:run

 or using maven
mvn spring-boot:run

---

### 👉 Frontend - User App
cd food
npm install
npm start

👉 Admin Panel
cd adminpanel
npm install
npm start

🔐 Environment Variables
Create a .env file in both food/ and adminpanel/ folders:
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_RAZORPAY_KEY=your_razorpay_key

✨ Features
🍱 Browse dishes and categories

🛒 Add items to cart and place orders

🔐 Secure login (JWT-based auth)

🧾 Payment integration with Razorpay

📦 Admin dashboard for managing products and orders




📜 License
This project is open-source and available under the MIT License.

