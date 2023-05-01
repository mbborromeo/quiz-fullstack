import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

const app = express();

/* MIDDLEWARE APP */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config(); // initialise app with Dotenv

/* APP PORT NUMBERS */
const port = process.env.PORT || 8080; // process.env.PORT doesn't exist for some reason

/* ROUTES */
app.get("/", (req, res) => {
  try {
    res.json("Get root request");
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, () => {
  console.log("process.env", process.env);
  console.log(`Server connected to http://localhost:${port}`);
});
