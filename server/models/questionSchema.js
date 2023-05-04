import mongoose from "mongoose";

const { Schema } = mongoose;

/** Question model */
const questionModel = new Schema({
  questions: { type: Array, default: [] },
  answers: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});

// create a Questions collection inside mongoDB database with structure of questionModel
// export const Questions = mongoose.model("Question", questionModel);
export default mongoose.model("Question", questionModel);
