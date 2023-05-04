import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

export async function getQuestions(req, res) {
  // res.json("questions API Get request");
  try {
    const q = await Questions.find(); // await because database transaction?
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

export async function insertQuestions(req, res) {
  // res.json("questions API Post request");
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
    // res.json("questions API Delete request");
    await Questions.deleteMany();
    res.json({ msg: "Questions deleted successfully!" });
  } catch (error) {
    res.json({ error });
  }
}

export async function getResult(req, res) {
  res.json("result API Get request");
}

export async function storeResult(req, res) {
  res.json("result API Post request");
}

export async function dropResult(req, res) {
  res.json("result API Delete request");
}
