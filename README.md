# 3W Social App

A full-stack MERN social media application built using React, Material UI, Node.js, Express, MongoDB, and JWT Authentication.

## Features

### Authentication

* User Signup
* User Login
* JWT Authentication
* Protected Routes

### Posts

* Create Text Posts
* Image Upload Support
* Feed with Latest Posts
* Delete Posts

### Social Features

* Like / Unlike Posts
* Add Comments
* Delete Own Comments
* Follow / Unfollow Users
* Search Users

### Profile

* User Profile Page
* Followers & Following Support

### UI

* Modern Dark Theme
* Material UI Components
* Responsive Layout
* Toast Notifications

---

## Tech Stack

### Frontend

* React
* Vite
* Material UI
* React Router DOM
* Axios
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Multer

---

## Folder Structure

```
3w-social-app
│
├── backend
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── hooks
│   │   ├── layouts
│   │   ├── pages
│   │   ├── protected
│   │   ├── services
│   │   ├── styles
│   │   └── theme
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/prateek-p-t/3w-social-app.git
cd 3w-social-app
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

Backend runs on:

```
http://localhost:5000
```

---

## API Endpoints

### Authentication

* POST `/api/auth/signup`
* POST `/api/auth/login`

### Posts

* GET `/api/posts`
* POST `/api/posts`
* PUT `/api/posts/:id/like`
* PUT `/api/posts/:id/unlike`
* POST `/api/posts/:id/comment`
* DELETE `/api/posts/:postId/comment/:commentId`
* DELETE `/api/posts/:id`

### Users

* GET `/api/users/search/:username`
* PUT `/api/users/:id/follow`
* PUT `/api/users/:id/unfollow`
* GET `/api/users/:id`

### Upload

* POST `/api/upload`

---

## Future Improvements

* Comment Modal
* Image Preview Before Upload
* Relative Time Formatting
* Responsive Sidebar
* Cloudinary Integration
* Notifications
* Skeleton Loaders

---

## Author

**Prateek Tiwari**

GitHub:
https://github.com/prateek-p-t
