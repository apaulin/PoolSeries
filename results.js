var pool = new Pool();
var lastUpdated = "25 avril 2015";

var results = pool.addPlayer("Results");
results.rounds[0].series.push(new Series("Montreal", 0, 0));
results.rounds[0].series.push(new Series("---", 0, 0));
results.rounds[0].series.push(new Series("NY Rangers", 5, 0));
results.rounds[0].series.push(new Series("Washington", 0, 0));
results.rounds[0].series.push(new Series("Minnesota", 0, 0));
results.rounds[0].series.push(new Series("Chicago", 0, 0));
results.rounds[0].series.push(new Series("Anaheim",  4, 0));
results.rounds[0].series.push(new Series("Calgary", 0, 0));

results.finalistEast = "---";
results.finalistWest = "---";
results.cupWinner    = "---";
results.points = -1;


var scores = new Object();
scores.rounds = new Array();
scores.rounds[0] = new Object();
scores.rounds[0].scores = new Array();
scores.rounds[0].scores.push(new Score("Montreal", 3));
scores.rounds[0].scores.push(new Score("Ottawa", 2));
scores.rounds[0].scores.push(new Score("Tampa Bay", 2));
scores.rounds[0].scores.push(new Score("Detroit", 2));
scores.rounds[0].scores.push(new Score("NY Rangers", 4));
scores.rounds[0].scores.push(new Score("Pittsburgh", 1));
scores.rounds[0].scores.push(new Score("Washington", 3));
scores.rounds[0].scores.push(new Score("NY Islanders", 2));
scores.rounds[0].scores.push(new Score("St-Louis", 2));
scores.rounds[0].scores.push(new Score("Minnesota", 3));
scores.rounds[0].scores.push(new Score("Nashville", 2));
scores.rounds[0].scores.push(new Score("Chicago", 3));
scores.rounds[0].scores.push(new Score("Anaheim", 4));
scores.rounds[0].scores.push(new Score("Winnipeg", 0));
scores.rounds[0].scores.push(new Score("Vancouver", 2));
scores.rounds[0].scores.push(new Score("Calgary", 3));
/*scores.rounds[1] = new Object();
scores.rounds[1].scores = new Array();
scores.rounds[1].scores.push(new Score("Ducks", 3));
scores.rounds[1].scores.push(new Score("Kings", 3));
scores.rounds[1].scores.push(new Score("Blackhawks", 4));
scores.rounds[1].scores.push(new Score("Wild", 2));
scores.rounds[1].scores.push(new Score("Bruins", 3));
scores.rounds[1].scores.push(new Score("Canadiens", 4));
scores.rounds[1].scores.push(new Score("Penguins", 3));
scores.rounds[1].scores.push(new Score("Rangers", 4));
scores.rounds[2] = new Object();
scores.rounds[2].scores = new Array();
scores.rounds[2].scores.push(new Score("Kings", 4));
scores.rounds[2].scores.push(new Score("Blackhawks", 3));
scores.rounds[2].scores.push(new Score("Canadiens", 2));
scores.rounds[2].scores.push(new Score("Rangers", 4));
scores.rounds[3] = new Object();
scores.rounds[3].scores = new Array();
scores.rounds[3].scores.push(new Score("Rangers", 0));
scores.rounds[3].scores.push(new Score("Kings", 1));
*/
