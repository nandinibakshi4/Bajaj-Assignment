const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get("/bfhl", (req, res) => {
  // GET endpoint to test if the API is alive
  res.status(200).json({
    operation_code: 1,
  });
});

app.post("/bfhl", (req, res) => {
  const input = req.body.data;

  let odd = [];
  let even = [];
  let alphabets = [];
  let special = [];
  let total = 0;
  let rawLetters = "";

  input.forEach((val) => {
    if (/^-?\d+$/.test(val)) {
      let num = parseInt(val);
      total += num;
      if (num % 2 === 0) even.push(val);
      else odd.push(val);
    } else if (/^[a-zA-Z]+$/.test(val)) {
      alphabets.push(val.toUpperCase());
      rawLetters += val;
    } else {
      special.push(val);
    }
  });

  // Reverse alternating caps from rawLetters
  let rev = rawLetters.split("").reverse();
  let concatString = rev
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");

  res.status(200).json({
    is_success: true,
    user_id: "nandini_bakshi_24062004",
    email: "nandini@chitkara.edu.in",
    roll_number: "2210999999",
    odd_numbers: odd,
    even_numbers: even,
    alphabets: alphabets,
    special_characters: special,
    sum: total.toString(),
    concat_string: concatString,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
