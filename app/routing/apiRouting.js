var people = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/people", function (req, res) {
        res.json(people);
    });

    app.post("/api/people", function (req, res) {

        var user = req.body;
        var inputScore = user.scores;
        var minDifference = 40;

        for (var i = 0; i < inputScore.length; i++) {
            inputScore[i] = parseInt(inputScore[i]);
        }
        var bestFriend = "";
        var bestPic = "";
        for (var i = 0; i < people.length; i++) {
            var difference1 = 0;
            for (var j = 0; j < people[i].scores.length; j++) {
                var difference2 = Math.abs(inputScore[j] - people.scores[j]);
                difference1 += difference2;
            }
            if (difference1 < minDifference) {
                bestFriend = people[i].name;
                bestPic = people[i].photo;
                minDifference = difference1;
            }
        }

        people.push(user);

        res.render({bestFriend, bestPic});
    });
};