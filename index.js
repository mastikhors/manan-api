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

app.get("/waxing", (req, res) => {
  res.json([
    {
      message: "Manan waxing day 1-1",
      img: "https://cdn.discordapp.com/attachments/893327321782706256/925640894969958420/IMG_7633.jpg",
    },
    {
      message: "Manan waxing day 1-2",
      img: "https://cdn.discordapp.com/attachments/893327321782706256/925640895297118299/IMG_7634.jpg",
    },
    {
      message: "Manan waxing day 2-1",
      img: "https://cdn.discordapp.com/attachments/893327321782706256/925640894244323368/IMG_7631.jpg",
    },
    {
      message: "Manan waxing day 2-2",
      img: "https://cdn.discordapp.com/attachments/893327321782706256/925640894626033674/IMG_7632.jpg",
    },
  ]);
});

app.get("/memes", (req, res) => {
  res.json([
    {
      message: "Manan and tanki",
      img: "https://cdn.discordapp.com/attachments/913460367844323378/927289026896101446/unknown.png",
    },
    {
      message: "padhai kar vele",
      img: "https://cdn.discordapp.com/attachments/913460367844323378/927289176452366366/unknown.png",
    },
  ]);
});


app.listen(process.env.PORT, () => {
  console.log("Server started on port 3000");
});
