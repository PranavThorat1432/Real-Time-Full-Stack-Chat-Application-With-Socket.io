# ⚡ QuickChat – Real-Time Full-Stack Chat Application (MERN + Socket.io)

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-brightgreen" />
  <img src="https://img.shields.io/badge/Made%20with-MERN%20Stack-blueviolet" />
  <img src="https://img.shields.io/badge/Socket.io-Real--time-black" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" />
</p>

**QuickChat** is a **real-time chat application** built with the **MERN Stack** and powered by **Socket.io** for instant, bidirectional communication.

✅ **One-to-One Messaging** – Chat seamlessly with friends in real time.
✅ **Authentication System** – Secure login & signup with password hashing.
✅ **Scalable Backend** – Built with Express.js, MongoDB, and REST APIs.
✅ **Responsive Frontend** – Crafted with React and Tailwind CSS.
✅ **Real-Time Updates** – Messages instantly appear without refreshing.
✅ **Deployment Ready** – Backend deployed on **Render**, frontend on **Vercel**.

This project showcases **real-time communication architecture**, **web socket handling**, and **modern UI/UX design** – a solid foundation for any production-grade chat system.

---

## 🖼 Screenshots

![quickchat 1](https://github.com/user-attachments/assets/476b760e-c447-4b55-8c36-292648055c40)

![quickchat 2](https://github.com/user-attachments/assets/85776cc9-3a0d-4b27-a355-c276147bb6e3)

![quickchat 3](https://github.com/user-attachments/assets/91361b39-4c6f-4fdd-a69b-83ee67c88e60)

---

## 🚀 Key Features

* 🔥 **Real-time messaging** with **Socket.io**
* 🔑 **JWT authentication** with secure Bearer headers
* 🟢 **Online presence tracking** and live status indicators
* 🖼 **Image upload & media gallery** via Cloudinary
* 🎨 **Responsive modern UI** built with Tailwind CSS
* 🧩 **Modular, scalable codebase** with clear separation of concerns

---

## 🛠️ Tech Stack & Tools

<p align="left">  
  <!-- Core Stack -->  
  <img src="https://img.shields.io/badge/ReactJS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>  
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>  
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>  
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>  

  <!-- Real-time & Backend -->  

  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white"/>  
  <img src="https://img.shields.io/badge/REST%20API-005571?style=for-the-badge&logo=fastapi&logoColor=white"/>  

  <!-- Deployment & Tools -->  

  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white"/>  
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>  
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>  
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>  

  <!-- Styling -->  

  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>  
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>  
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>  
</p>  


---

## 📂 Monorepo Structure

```bash
./
├─ Client/                      # React (Vite) front-end
│  ├─ src/
│  │  ├─ MyComponents/          # UI components (Chat, Sidebar, RightSidebar)
│  │  ├─ Library/               # Helpers & utilities
│  │  ├─ Pages/                 # App pages
│  │  └─ index.css              # Tailwind + global styles
│  ├─ Context/                  # Auth & Chat contexts
│  └─ ...
└─ Server/                      # Node/Express back-end
   ├─ controllers/              # Route handlers
   ├─ middlewares/              # Auth middleware
   ├─ models/                   # Mongoose schemas
   ├─ lib/                      # DB, utils, cloudinary
   └─ server.js                 # Express + Socket.io setup
```

---

## ⚡ Quick Start

### 1️⃣ Clone & Install

```bash
# From the project root
cd Server && npm install
cd ../Client && npm install
```

### 2️⃣ Configure Environment Variables

* **Server/.env**

```env
PORT=4000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-strong-secret>
CLOUDINARY_CLOUD_NAME=<cloud-name>
CLOUDINARY_API_KEY=<api-key>
CLOUDINARY_API_SECRET=<api-secret>
```

* **Client/.env**

```env
VITE_BACKEND_URL=http://localhost:4000
```

### 3️⃣ Run Locally

```bash
# Terminal 1 - Start server
cd Server
npm run dev   # nodemon

# Terminal 2 - Start client
cd Client
npm run dev
```

> 🔗 Client runs on [http://localhost:5173](http://localhost:5173)
> 🔗 Server runs on [http://localhost:4000](http://localhost:4000)

---

## 🔐 Authentication & Security

* Passwords **hashed & salted** using bcrypt
* JWT authentication with expiry
* Client sends:

  ```
  Authorization: Bearer <token>
  ```
* Socket.io secured via `handshake.auth.token`

---

## 🔗 API Endpoints (High-level)

Base URL: `/api`

**Auth**

* `POST /auth/signup` – Register new account
* `POST /auth/login` – Authenticate & receive token
* `GET /auth/is-auth` – Verify session
* `PUT /auth/update-profile` – Update bio/avatar

**Messages**

* `GET /messages/:userId` – Fetch conversation
* `POST /messages/send` – Send `{ text?, image?, receiverId }`

---

## 🔌 Socket.io Events

* `getOnlineUsers` → Returns array of active user IDs
* `newMessage` → Server pushes new incoming messages

Example (Client):

```js
newSocket.on('getOnlineUsers', (userIds) => setOnlineUser(userIds));
```

---

## 🎨 UI & UX

* Responsive with Tailwind CSS
* Dark/light theme ready (extendable)
* Chat components:

  * `ChatContainer.jsx`
  * `Sidebar.jsx`
  * `RightSidebar.jsx`


---

## 🚧 Future Improvements

* ✅ Group chats & channels
* ✅ Typing indicators
* ✅ Push notifications (Web & Mobile)
* ✅ End-to-end encryption for messages

---

## 🤝 Contribution

Contributions are welcome!
If you’d like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE.md) file for details.

---

## 🌍 Connect With Me

👤 **Pranav Thorat**

| Platform              | Link                                                          |
| --------------------- | ------------------------------------------------------------- |
| 🌐 **Live Demo**      | [View Now](https://quickchat-real-time-full-stack-chat.vercel.app/)                        |
| 🧑‍💻 **GitHub Repo** | [View Code](https://github.com/PranavThorat1432/Real-Time-Full-Stack-Chat-Application-With-Socket.io) |
| 💼 **LinkedIn**       | [Connect with Me](https://www.linkedin.com/in/curiouspranavthorat/)       |
| 📩 **Email**          | [pranavthorat95@gmail.com](mailto:pranavthorat95@gmail.com)   |


---



## 🙌 Closing Note

I built this project to **explore real-time web technologies** and strengthen my **MERN stack expertise**.
If you find this project helpful or inspiring, feel free to ⭐ **star this repo** and connect with me – always open for collaboration and feedback! 🚀💬

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Pranav Thorat](https://github.com/PranavThorat1432)

</div>