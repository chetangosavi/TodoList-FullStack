#MERN To-Do List

A full-stack To-Do List application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This app allows users to manage their tasks efficiently by adding, updating, and deleting them.

🚀 Features

✅ User Authentication (Sign up & Login)✅ Add, Edit, Delete Tasks✅ Mark Tasks as Completed✅ Responsive UI✅ MongoDB Database for Storage✅ RESTful API with Express.js✅ Frontend built with React.js

🛠️ Tech Stack

Frontend: React.js, Redux, TailwindCSS (or Bootstrap)

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication: JWT (JSON Web Tokens) & bcrypt.js

📂 Folder Structure

📦 MERN-ToDo-App
├── 📂 client          # React Frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   ├── README.md
├── 📂 server          # Node.js Backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   ├── .env
│   ├── package.json
├── .gitignore
├── README.md

🏗️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/yourusername/MERN-ToDo-App.git
cd MERN-ToDo-App

2️⃣ Setup Backend

cd server
npm install

Create a .env file inside the server folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start the backend server:

npm run dev

3️⃣ Setup Frontend

cd ../client
npm install
npm start

🚀 Usage

Register a new account or log in.

Add tasks to your list.

Edit or delete tasks when necessary.

Mark tasks as completed.

Logout securely.

📸 Screenshots



🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a PR.

🛡️ License

This project is licensed under the MIT License.

📬 Contact

For any issues, feel free to reach out via GitHub Issues or email at your.email@example.com.

Happy Coding! 🚀🎉


