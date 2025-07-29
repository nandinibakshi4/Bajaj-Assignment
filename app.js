const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.get("/bfhl", (req, res) => {
  res.json({
    operation_code: 1
  });
});

app.post("/bfhl", (req, res) => {
  const input = req.body.data;

  const odd = [];
  const even = [];
  const alphabets = [];
  const specialChars = [];
  let sum = 0;

  input.forEach(item => {
    if (!isNaN(item)) {
      const num = parseInt(item);
      if (num % 2 === 0) {
        even.push(item);
      } else {
        odd.push(item);
      }
      sum += num;
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item.toUpperCase());
    } else {
      specialChars.push(item);
    }
  });

  const reversed = alphabets.join('').split('').reverse();
  const formatted = reversed
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join('');

  const response = {
    is_success: true,
    user_id: "nandini_24062004",
    email: "nandini597.be22@chitkara.edu.in",
    roll_number: "2210990597",
    odd_numbers: odd,
    even_numbers: even,
    alphabets: alphabets,
    special_characters: specialChars,
    sum: sum.toString(),
    concat_string: formatted
  };

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});