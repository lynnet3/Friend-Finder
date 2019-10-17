var peopleList = require("../data/friends");

module.exports = function(app){
    app.get("/api/people", function(req,res){
        res.json(peopleList);
    });

    app.post("/api/people", function(req,res){

        var user = req.body;

        for (var i = 0; i < user.scores.length; i++){
            user.scores[i] = parseInt(user.scores[i]);
        }

        var bestFriend = 0;
        var minDifference = 40;

        for (var i = 0; i < people.length; i++){
            var difference1 = 0;
            for (var j = 0; j < people[i].scores.length; j++){
                var difference2 = Math.abs(user.scores[j] - people.scores[j]);
                difference1 += difference2;
            }
            if (difference1 < minDifference){
                bestFriend = i;
                minDifference = difference1;
            }
        }

        people.push(user);

        res.render(peope[bestFriend]);
    });
};