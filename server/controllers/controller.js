import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

export async function getQuestions(req, res) {
  try {
    const q = await Questions.find(); // await because database transaction?
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

export async function storeQuestions(req, res) {
  try {
    // https://www.mongodb.com/docs/manual/reference/method/db.collection.insertMany/
    // insertMany no longer accepts callback:
    // https://stackoverflow.com/questions/75595278/callback-is-no-more-accepting-in-model-insertmany-after-version-7-0-0-update
    Questions.insertMany({ questions: questions, answers: answers }).then(
      res.json({ msg: "Data saved successfully!" })
    );
  } catch (error) {
    res.json({ error });
  }
}

export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions deleted successfully!" });
  } catch (error) {
    res.json({ error });
  }
}

export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) {
      throw new Error("Data not provided!");
    }
    // insert document in MongoDB using create
    // difference between create (for one document) vs insertMany (many documents)
    // Model.create() no longer accepts a callback
    Results.create({ username, result, attempts, points, achieved }).then(
      res.json({ msg: "Result saved successfully!" })
    );
  } catch (error) {
    res.json({ error });
  }
}

export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Results deleted successfully!" });
  } catch (error) {
    res.json({ error });
  }
}
