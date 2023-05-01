export async function getQuestions(req, res) {
  res.json("questions API Get request");
}

export async function insertQuestions(req, res) {
  res.json("questions API Post request");
}

export async function dropQuestions(req, res) {
  res.json("questions API Delete request");
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
