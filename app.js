const express = require('express');
const app = express();
const snoowrap = require('snoowrap');
const keys = require('./config/keys');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const r = new snoowrap({
    userAgent: 'RedditMood',
    clientId: keys.clientId,
    clientSecret: keys.clientSecret,
    username: keys.user,
    password: keys.pass
});

app.get('/api/getposts', (req, res) => {
    r.getHot(req.query.search, {after: req.query.after})
        .then(posts => {
            res.json(posts)
        })
        .catch(err => console.log(err))
})

app.listen(5000, () => console.log('Server started on port 5000...'));