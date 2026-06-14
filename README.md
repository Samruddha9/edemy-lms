# 🎓 Edemy LMS - Full Stack Learning Management System

> A complete Learning Management System built from scratch — like Udemy!

🔗 **GitHub:** https://github.com/Samruddha9/edemy-lms
👤 **Developer:** Samruddha Shewale
💼 **LinkedIn:** https://www.linkedin.com/in/samruddha-shewale-7416302a7

---

## 🚀 Features

### 👨‍🏫 Educator
- Create and publish courses with thumbnails
- Add chapters and video lectures (YouTube)
- View enrolled students and earnings
- Educator dashboard with analytics

### 🎓 Student
- Browse and search courses
- Stripe payment integration
- Watch video lectures
- Track course progress
- Rate and review courses
- My Enrollments page

### 🔐 Authentication
- Clerk-based signup/login
- Role-based access (Student/Educator)
- Secure JWT token verification

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Auth | Clerk |
| Payments | Stripe |
| Media | Cloudinary |
| Tunnel | Ngrok (development) |

---

## 📁 Project Structure
edemy-lms/
client/
src/
pages/
components/
context/
server/
controllers/
models/
routes/
middlewares/
configs/

---

## ⚙️ Setup and Installation

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Accounts on: Clerk, Stripe, Cloudinary, Ngrok

### 1. Clone the repository
```bash
git clone https://github.com/Samruddha9/edemy-lms.git
cd edemy-lms
```

### 2. Setup Server
```bash
cd server
npm install
```

Create server/.env:
MONGODB_URI=mongodb://127.0.0.1:27017/lms
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_api_secret
CLERK_WEBHOOK_SECRET=whsec_xxxxxxxxxx
CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxx
CURRENCY=USD

### 3. Setup Client
```bash
cd client
npm install
```

Create client/.env:
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxx
VITE_BACKEND_URL=http://localhost:5000
VITE_CURRENCY=$

### 4. Run the Project

Terminal 1 - Backend:
```bash
cd server
node server.js
```

Terminal 2 - Frontend:
```bash
cd client
npm run dev
```

Terminal 3 - Ngrok:
```bash
ngrok http 5000
```

### 5. Open in browser
http://localhost:5173

---

## 💳 Test Payment Card

| Field | Value |
|-------|-------|
| Card Number | 4242 4242 4242 4242 |
| Expiry | 12/34 |
| CVC | 123 |

---

## 📸 Pages

- 🏠 Home - Course listings and hero section
- 📚 Course List - Browse all courses
- 📖 Course Details - Enroll and view details
- 🎬 Player - Watch lectures and track progress
- 👨‍🏫 Educator Dashboard - Manage courses
- 📋 My Enrollments - Student dashboard
- ℹ️ About, Contact, Privacy pages

---

## 🤝 Connect With Me

💼 Open to Full Stack Developer opportunities!

- 💼 LinkedIn: https://www.linkedin.com/in/samruddha-shewale-7416302a7
- 🐙 GitHub: https://github.com/Samruddha9

---

⭐ If you like this project, give it a star on GitHub!

