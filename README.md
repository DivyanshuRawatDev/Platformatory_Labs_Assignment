# Platformatory_Labs_Assignment

This project demonstrates an application using OIDC login, editable user profiles, and Temporal workflow integration.

---

## 🚀 How to Run the Project

### 📦 Backend Setup

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Configure `BASE_URL`**
   - Open `backend/src/configs/common.ts`
   - Replace the existing `BASE_URL` with your [crudcrud](https://crudcrud.com/) URL

3. **Start Services**  
   Open **three terminals** in the `backend` folder and run the following:

   - **Terminal 1** – Start backend server:
     ```bash
     npm run dev
     ```

   - **Terminal 2** – Start Temporal via Docker (make sure Docker Desktop is open):
     ```bash
     docker compose up
     ```

   - **Terminal 3** – Start Temporal worker:
     ```bash
     npx ts-node src/temporal/worker.ts
     ```

---

### 🌐 Frontend Setup

1. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Configure `BASE_URL`**
   - Open `frontend/src/configs/common.ts`
   - Replace the `BASE_URL` with your [crudcrud](https://crudcrud.com/) URL

3. **Run Frontend**
   ```bash
   npm run dev
   ```

---

## 🧪 Temporal Dashboard

After everything is up and running, you can access the Temporal Web UI at:

```
http://localhost:8081
```

---

✅ Now you're all set to run the application!

----------------------------------------------------

# Firebase Auth + Temporal Workflow App

This project demonstrates a basic Google Login flow using Firebase, a dashboard to view/edit user data, and Temporal workflow integration for background activities.

---

## 🔐 Login Screen

<div align="center">
  <img src="https://i.ibb.co/9dq2LsW/Screenshot-2025-06-27-at-8-47-11-PM.png" alt="Login Screen" width="600"/>
</div>

---

## 📋 Dashboard Screen

<div align="center">
  <img src="https://i.ibb.co/TMw5TCsS/Screenshot-2025-06-27-at-8-47-30-PM.png" alt="Dashboard Screen" width="600"/>
</div>

Here, you can:
- View your user details
- Edit your profile fields
- Click **"Save Profile"** to trigger a Temporal workflow that updates the backend

---

## ⏱️ Temporal UI

After you save your profile, a background workflow is triggered via [Temporal](https://temporal.io/).

<div align="center">
  <img src="https://i.ibb.co/C3zNFJgJ/Screenshot-2025-06-27-at-8-48-16-PM.png" alt="Temporal UI" width="600"/>
</div>

✅ In the Temporal UI, you can see:
- Workflow execution for your user
- Status changes (e.g., `Running → Completed`) after ~10 seconds
- Activity logs (e.g., `updateCrudCrud`)

---

## 🚀 Tech Stack

- **Frontend:** React + Firebase Auth (Google)
- **Backend:** Node.js + Express + Firebase Admin SDK
- **Workflow Engine:** Temporal.io
- **API storage:** CrudCrud (mock REST storage)

---



