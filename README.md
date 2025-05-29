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

## Screenshots
*Look*
![Screenshot (223)](https://github.com/user-attachments/assets/bb26ea76-fd1f-4a16-a8bb-18508c34eefc)
![Screenshot (219)](https://github.com/user-attachments/assets/ef910ef1-3194-41fa-942a-b6047972ea01)
![Screenshot (213)](https://github.com/user-attachments/assets/a86a4bda-2948-4d07-b1a8-010e1b714904)
![Screenshot (218)](https://github.com/user-attachments/assets/6ca6f947-00cb-4d67-be72-1615528e02ef)
![Screenshot (224)](https://github.com/user-attachments/assets/6e7f7cfc-f663-498c-bffa-44823d1d39d2)

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

---


👉 Admin Panel
cd adminpanel
npm install
npm start

---


🔐 Environment Variables
Create a .env file in both food/ and adminpanel/ folders:
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_RAZORPAY_KEY=your_razorpay_key

---


✨ Features
🍱 Browse dishes and categories

🛒 Add items to cart and place orders

🔐 Secure login (JWT-based auth)

🧾 Payment integration with Razorpay

📦 Admin dashboard for managing products and orders


---


📜 License
This project is open-source and available under the MIT License.

