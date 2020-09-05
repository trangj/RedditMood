const express = require("express");
const app = express();
const snoowrap = require("snoowrap");
const keys = require("./config/keys.js");
const cors = require("cors");
const language = require("@google-cloud/language");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = new language.LanguageServiceClient();

const r = new snoowrap({
  userAgent: "RedditMood",
  clientId: keys.clientId,
  clientSecret: keys.clientSecret,
  username: keys.user,
  password: keys.pass,
});

app.get("/api/getposts", (req, res) => {
  r.getHot(req.query.search)
    .then((posts) => {
      res.json(
        posts.map(async (post) => {
          const document = {
            content: post.title,
            type: "PLAIN_TEXT",
          };
          const [result] = await client.analyzeSentiment({ document });
          const sentiment = result.documentSentiment;
          post.sentiment = sentiment;
          return post;
        })
      );
    })
    .catch((err) => console.log(err));
});

app.listen(5000, () => console.log("Server started on port 5000..."));
