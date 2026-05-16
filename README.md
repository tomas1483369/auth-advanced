# Auth Advanced - Full Stack Authentication System

Auth Advanced is a modern full-stack authentication application built with the MERN stack.  
The project includes secure user authentication, email verification, password reset functionality, protected routes, and a responsive modern interface.

---

<img width="1026" height="876" alt="Captura de pantalla 2026-05-13 135011" src="https://github.com/user-attachments/assets/c803cd3f-56bc-415d-997f-bb9b00576dfa" />


---

# Features

- Secure User Authentication with JWT
- Login and Registration System
- Email Verification with Mailtrap
- Forgot Password & Reset Password Flow
- Password Hashing with bcryptjs
- Protected Routes & Authentication Validation
- Persistent Authentication using Cookies
- Responsive UI with Tailwind CSS
- Smooth Animations using Framer Motion
- Toast Notifications with React Hot Toast
- Global State Management with Zustand
- REST API Communication using Axios
- MongoDB Database Integration
- Modern Full-Stack Architecture

---

# Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Zustand
- Framer Motion
- Lucide React
- React Hot Toast

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Cookie Parser
- CORS
- Dotenv
- Crypto
- Mailtrap

---

# Screenshots

Add your application screenshots here.

```md
![Login Page](./screenshots/login.png)

![Sign Up Page](./screenshots/signup.png)

![Dashboard](./screenshots/dashboard.png)
```

---

# Installation

## Clone the Repository

```bash
git clone https://github.com/yourusername/auth-advanced.git

cd auth-advanced
```

---

# Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173

MAILTRAP_TOKEN=your_mailtrap_token

MAILTRAP_ENDPOINT=your_mailtrap_endpoint
```

Start the backend server:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Open your browser and navigate to:

```bash
http://localhost:5173
```

---

# Project Structure

```bash
auth-advanced/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── models/
│   ├── mails/
│   ├── utils/
│   ├── db/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── assets/
│   └── main.jsx
│
└── README.md
```

---

# Authentication Flow

1. User creates an account
2. Password is securely hashed with bcryptjs
3. Verification email is sent using Mailtrap
4. User verifies account
5. JWT token is generated after login
6. Protected routes validate authentication
7. Users can reset forgotten passwords through email

---

# Environment Variables

## Backend `.env`

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

CLIENT_URL=http://localhost:5173

MAILTRAP_TOKEN=

MAILTRAP_ENDPOINT=
```

---

# Available Scripts

## Backend

```bash
npm run dev
```

## Frontend

```bash
npm run dev
```

---

# Future Improvements

- Google Authentication
- GitHub Authentication
- Two-Factor Authentication (2FA)
- User Profile Customization
- Dark Mode
- Session Management
- Account Activity Logs
- Refresh Token System
- Rate Limiting & Security Enhancements

---

# License

This project is licensed under the ISC License.

---

# Author

Developed by Your Name
