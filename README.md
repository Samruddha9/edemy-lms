# 📚 Edemy — Learning Management System (LMS)

Edemy is a full-stack **Learning Management System** built with the MERN stack (MongoDB, Express, React, Node.js). It allows **students** to browse, purchase, and learn from video courses, and lets **educators** create and manage their own courses — complete with progress tracking, ratings, and downloadable completion certificates.

---

## ✨ Features

### 🧑‍🎓 Student Side
- Browse and search courses by category
- View detailed course pages (curriculum, ratings, educator info)
- Secure course purchases via **Stripe**
- Track learning progress (lecture-by-lecture completion)
- Built-in video player for course content
- **Download a personalized certificate** upon course completion
- View enrolled courses on a dedicated "My Enrollments" page
- Leave ratings and reviews for completed courses
- Static pages: About, Contact, Privacy Policy, and Learn More (platform overview, testimonials, and value proposition)

### 🧑‍🏫 Educator Side
- Dedicated educator dashboard
- Create and publish new courses with a rich text editor (Quill)
- Upload course thumbnails and content via **Cloudinary**
- Manage and edit existing courses
- View enrolled students per course
- Track earnings and course performance

### ⚙️ General
- Authentication and user management via **Clerk**
- Responsive UI built with **React + Tailwind CSS**
- Toast notifications for real-time feedback
- Webhook-based syncing for payments and user events

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Tailwind CSS
- React Toastify
- Quill (rich text editor)

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Clerk (authentication & webhooks)
- Stripe (payments & webhooks)
- Cloudinary (media storage)
- Multer (file uploads)

**Dev Tools**
- ngrok (for exposing local server to webhooks)
- Vercel (deployment)

---

## 📁 Project Structure

```
LMS-full-stack/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── assets/          # Images, icons, dummy data
│   │   ├── components/
│   │   │   ├── student/      # Navbar, Footer, Hero, CallToAction, Testimonials, etc.
│   │   │   └── educator/     # Educator-specific components
│   │   ├── pages/
│   │   │   ├── student/      # Home, CourseDetails, CoursesList, Player, MyEnrollments, LearnMore, etc.
│   │   │   └── educator/      # Dashboard, AddCourse, MyCourses, StudentsEnrolled
│   │   └── context/          # Global app context
│   └── vercel.json
│
├── server/                  # Express backend
│   ├── configs/             # MongoDB, Cloudinary, Multer configs
│   ├── controllers/         # Course, Educator, User controllers
│   ├── middlewares/          # Auth middleware (Clerk)
│   ├── models/              # Course, User, Purchase, CourseProgress models
│   ├── routes/              # API route definitions
│   └── server.js
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) database
- [Clerk](https://clerk.com/) account (for authentication)
- [Stripe](https://stripe.com/) account (for payments)
- [Cloudinary](https://cloudinary.com/) account (for media storage)
- [ngrok](https://ngrok.com/) (for testing webhooks locally)

### 1. Clone the Repository
```bash
git clone https://github.com/Samruddha9/edemy-lms.git
cd edemy-lms/LMS-full-stack
```

### 2. Set Up the Backend
```bash
cd server
npm install
```

Create a `.env` file in the `server` folder with the following variables:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
CURRENCY=usd
```

### 3. Set Up the Frontend
```bash
cd ../client
npm install
```

Create a `.env` file in the `client` folder:
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CURRENCY=$
```

---

## ▶️ Running the Project Locally

The project requires **three terminals** running at the same time:

**Terminal 1 — Backend**
```bash
cd server
npm run server
```

**Terminal 2 — Frontend**
```bash
cd client
npm run dev
```

**Terminal 3 — ngrok (for webhooks)**
```bash
ngrok http 4000
```

Copy the generated `https://xxxx.ngrok-free.app` URL and use it to configure your **Clerk** and **Stripe** webhook endpoints (e.g., `https://xxxx.ngrok-free.app/clerk` and `https://xxxx.ngrok-free.app/stripe`).

> ⚠️ Note: ngrok URLs change on every restart unless you have a reserved/static domain. Update your webhook settings accordingly.

---

## 🌐 Deployment

This project is configured for deployment on **Vercel** (see `vercel.json` in both `client` and `server` folders). For production, remember to:
- Update `VITE_BACKEND_URL` to your deployed backend URL
- Set production webhook URLs in Clerk and Stripe dashboards
- Add all environment variables to your Vercel project settings

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is open source and available for learning and personal use. Please check with the repository owner before using it for commercial purposes.

---

## 👤 Author

**Samruddha9**
GitHub: [@Samruddha9](https://github.com/Samruddha9)
LinkedIn: [Samruddha Shewale](https://www.linkedin.com/in/samruddha-shewale-7416302a7)

