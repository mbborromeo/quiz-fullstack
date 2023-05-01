import { Router } from "express";

const router = Router();

/* Questions routes API */
router.get("/questions", (req, res) => {
  res.json("questions API get request");
});

export default router;
