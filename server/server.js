import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";

import connect from "./database/conn.js";

const app = express();

/** MIDDLEWARE APP */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

config(); // initialise app with Dotenv

/** APP PORT NUMBERS */
const port = process.env.PORT || 8080; // process.env.PORT doesn't exist for some reason

/** ROUTES */
// api routes
app.use("/api", router);

// root route
app.get("/", (req, res) => {
  try {
    res.json("Get root request");
  } catch (error) {
    res.json(error);
  }
});

/** Connect to MongoDB database */

// Start server only when we have a valid database connection
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection");
  });
