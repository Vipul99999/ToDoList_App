<h1 align="center">📝 ToDoListApp</h1>

<p align="center">
  A secure, modern full-stack task manager with <strong>JWT authentication</strong>, full <strong>CRUD APIs</strong>, and sleek UI animations powered by <strong>Framer Motion</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

---

## 🚀 Features

- 🔐 **JWT Authentication** – Secure login, registration, and route protection.
- ✅ **Task CRUD** – Create, read, update, and delete tasks effortlessly.
- 🌐 **RESTful API** – Robust backend using Express & MongoDB.
- 💾 **Mongoose** – Schema-based data modeling.
- ⚡ **Framer Motion** – Smooth transitions & animations.
- 💅 **Tailwind CSS** – Modern, responsive design.
- 🔄 **Axios** – Reliable frontend-backend communication.

---

## 🧰 Tech Stack

| Category        | Technologies                                            |
|----------------|---------------------------------------------------------|
| **Frontend**    | React.js, Tailwind CSS, Axios, Framer Motion           |
| **Backend**     | Node.js, Express.js, JWT                               |
| **Database**    | MongoDB (Atlas or local)                               |
| **ORM**         | Mongoose                                                |
| **Version Control** | Git & GitHub                                      |
| **Animation**   | Framer Motion                                           |

---

---
## 🛠️ Installation & Setup

> **Prerequisites:** Node.js, npm, MongoDB (Atlas or local)


### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ToDoList_App.git
cd ToDoList_App

```
---
### ** Install Dependencies

## For Backend 
```bash
cd backend
npm install
```
## For Frontend 
```bash
cd ../frontend
npm install
```

---


### ** Configure Environment Variables**
- Create a `.env` file inside the /backend folder using the `.env.example` as a template:
```bash
cp backend/.env.example backend/.env

```
- Edit the `.env` file and add your config values:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret

```
🔐 Keep your JWT secret safe and never commit the real .env file.

---
### ** ▶️  Run the App

## Start Backend Server
```bash
cd backend
npm run dev
```

## Start Frontend App 
```bash
cd ../frontend
npm start
```

---
### ✅ App Running At:

- **Frontend:** [http://localhost:3000](http://localhost:3000)

- **Backend API:** [http://localhost:5000](http://localhost:5000)

---
###  ** 📂 Folder Structure
```bash
ToDoList_App/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
├── .env
└── README.md
```
---
### ** 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repo

2. Create a new branch: git checkout -b feature/your-feature

3. Make changes & commit: git commit -m "Add feature"

4. Push to branch: git push origin feature/your-feature

5. Open a pull request 🚀
---
### ** 💬 Contact
Have questions or suggestions? Reach out!

GitHub: @Vipul99999

Email: vipul20020308@gmail.com

