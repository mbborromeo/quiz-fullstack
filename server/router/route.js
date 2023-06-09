import { Router } from "express";

import * as controller from "../controllers/controller.js";

const router = Router();

/* Questions routes API */
// router.get("/questions", controller.getQuestions);
// router.post("/questions", controller.storeQuestions);
// chaining technique equivalent to above
router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.storeQuestions)
  .delete(controller.dropQuestions);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);

export default router;
