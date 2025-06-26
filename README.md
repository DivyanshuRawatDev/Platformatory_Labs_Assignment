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
