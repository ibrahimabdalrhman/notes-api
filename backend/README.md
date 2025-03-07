# Notes API

Notes API is a **NestJS** application for managing notes and folders with authentication support using **JWT** and a **PostgreSQL** database.

---

## **🚀 Prerequisites**

Before running the project, ensure you have the following tools installed:

- **Node.js** (version 16 or later)
- **Docker** (for easy database management)
- **PostgreSQL** (if you prefer not to use Docker)

---

## **📥 Installation**

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/ibrahimabdalrhman/notes-api.git
   cd notes-api/backend/
   ```
2. Install the required dependencies:
   ```sh
   npm install
   ```

---

## **⚙️ Environment Setup**

Create a **`.env`** file in the project root and add the following configurations:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=pass123
DB_NAME=notes_db
JWT_SECRET=your_secret_key
```

---

## **🐳 Running the Database with Docker**

If you prefer to run PostgreSQL via Docker, use the following command:

```sh
docker-compose up -d
```

This will start:

- **PostgreSQL** database on port `5432`
- **Adminer** database management interface at `http://localhost:8080`

> **Note**: You can access **Adminer** with the following credentials:
>
> - **Host:** `db`
> - **Username:** `postgres`
> - **Password:** `pass123`
> - **Database:** `notes_db`

---

## **🚀 Running the Application**

1. Start the application:
   ```sh
   npm run start
   ```
2. If you want auto-reloading on code changes:
   ```sh
   npm run start:dev
   ```

---

## **🔑 Authentication**

### **1️⃣ Register a New User**

- **Endpoint:** `POST /auth/register`
- **Body:**
  ```json
  {
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }
  ```

### **2️⃣ Login**

- **Endpoint:** `POST /auth/login`
- **Body:**
  ```json
  {
    "identifier": "testuser", // or email
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "access_token": "your_jwt_token"
  }
  ```

> Use the `access_token` for authentication in other requests by adding it to the header: `Authorization: Bearer your_jwt_token`.

---

## **🗂 Managing Folders and Notes**

### **📂 Folders**

- **Create Folder:** `POST /folders`
- **Get All Folders:** `GET /folders`
- **Update Folder:** `PATCH /folders/:id`
- **Delete Folder:** `DELETE /folders/:id`

### **📝 Notes**

- **Create Note:** `POST /notes`
- **Get All Notes:** `GET /notes`
- **Search & Filter:** `GET /notes?folderId=xyz&search=keyword`
- **Get Single Note:** `GET /notes/:id`
- **Update Note:** `PATCH /notes/:id`
- **Delete Note:** `DELETE /notes/:id`

---

## **🛡️ Security Features**

- **CSRF Protection** using `csurf`
- **Helmet** for security headers
- **Rate Limiting** to prevent excessive requests
- **CORS** to control allowed origins

---

## **📌 Notes**

- Ensure you pass the **`access_token`** in the header when making protected requests.
- Run **`docker-compose up -d`** before starting the app if using PostgreSQL via Docker.

---

## **🛠 Useful Commands**

| Command                 | Description                           |
| ---------------------- | ----------------------------------- |
| `npm run start`        | Start the application               |
| `npm run start:dev`    | Start the app with auto-reload      |
| `npm run build`        | Build a production-ready version    |
| `docker-compose up -d` | Start the database                  |
| `docker-compose down`  | Stop the database                   |

---

## **📞 Support & Contribution**

If you encounter any issues or have suggestions, feel free to open an **Issue** or submit a **Pull Request** in the repository!

**🎯 Enjoy using Notes API! 🚀**

## License
This project is licensed under the MIT License - see the LICENSE file for details.

