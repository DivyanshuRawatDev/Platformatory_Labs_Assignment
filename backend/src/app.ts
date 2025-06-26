import express from "express";
import handleAuth from "./routes/auth";
import handleUser from "./routes/user";
const app = express();
import cors from "cors";

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/api/auth", handleAuth);
app.use("/api/user",handleUser);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8080, () => {
  console.log("App is running on 8080");
});
