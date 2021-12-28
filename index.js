const express = require("express");
const app = express();

app.get("/bottle", (req, res) => {
  res.json({
    message: "Manan with bottle",
    img: "https://cdn.discordapp.com/attachments/884673907506941992/925496932955193424/Screenshot_2021-12-29_at_2.42.18_AM.png",
  });
});

app.get("/guitar", (req, res) => {
  res.json([
    {
      message: "Manan with guitar",
      img: "https://cdn.discordapp.com/attachments/884673907506941992/925496934666481694/Screenshot_2021-12-29_at_2.43.39_AM.png",
    },
    {
      message: "Manan with guitar 2",
      img: "https://cdn.discordapp.com/attachments/884673907506941992/925496933617913916/Screenshot_2021-12-29_at_2.42.46_AM.png",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
