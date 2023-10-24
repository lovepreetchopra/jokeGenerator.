
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/" , async (req, res ) => {
    try {
        const result = await axios.get("https://official-joke-api.appspot.com/random_joke");
        res.render("index.ejs", {
          setup: result.data.setup,
          punchline: result.data.punchline,
        });
      } catch (error) {
        console.log(error.response.data);
        res.status(500);
      }
});

app.listen(port, () => {
    console.log(`server is running on port ${port}.`);
});


