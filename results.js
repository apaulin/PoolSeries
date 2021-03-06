var pool = new Pool();
var lastUpdated = "27 mai 2015";

var results = pool.addPlayer("Results");
results.rounds[0].series.push(new Series("Montreal", 6, 0));
results.rounds[0].series.push(new Series("Tampa Bay", 7, 0));
results.rounds[0].series.push(new Series("NY Rangers", 5, 0));
results.rounds[0].series.push(new Series("Washington", 7, 0));
results.rounds[0].series.push(new Series("Minnesota", 6, 0));
results.rounds[0].series.push(new Series("Chicago", 6, 0));
results.rounds[0].series.push(new Series("Anaheim",  4, 0));
results.rounds[0].series.push(new Series("Calgary", 6, 0));

results.rounds[1].series.push(new Series("Tampa Bay", 6, 0)); // Montreal Tampa Bay
results.rounds[1].series.push(new Series("NY Rangers", 7, 0)); // NY Rangers Washington
results.rounds[1].series.push(new Series("Chicago", 4, 0)); // Chicago Minnesota
results.rounds[1].series.push(new Series("Anaheim", 5, 0)); // Anaheim  Calgary

results.rounds[2].series.push(new Series("---", 0, 0)); // NY Rangers Tampa Bay
results.rounds[2].series.push(new Series("Anaheim", 0, 0)); // Chicago Anaheim


results.finalistEast = "---";
results.finalistWest = "---";
results.cupWinner    = "---";
results.points = -1;


var scores = new Object();
scores.rounds = new Array();
scores.rounds[0] = new Object();
scores.rounds[0].scores = new Array();
scores.rounds[0].scores.push(new Score("Montreal", 4));
scores.rounds[0].scores.push(new Score("Ottawa", 2));
scores.rounds[0].scores.push(new Score("Tampa Bay", 4));
scores.rounds[0].scores.push(new Score("Detroit", 3));
scores.rounds[0].scores.push(new Score("NY Rangers", 4));
scores.rounds[0].scores.push(new Score("Pittsburgh", 1));
scores.rounds[0].scores.push(new Score("Washington", 4));
scores.rounds[0].scores.push(new Score("NY Islanders", 3));
scores.rounds[0].scores.push(new Score("St-Louis", 2));
scores.rounds[0].scores.push(new Score("Minnesota", 4));
scores.rounds[0].scores.push(new Score("Nashville", 2));
scores.rounds[0].scores.push(new Score("Chicago", 4));
scores.rounds[0].scores.push(new Score("Anaheim", 4));
scores.rounds[0].scores.push(new Score("Winnipeg", 0));
scores.rounds[0].scores.push(new Score("Vancouver", 2));
scores.rounds[0].scores.push(new Score("Calgary", 4));


scores.rounds[1] = new Object();
scores.rounds[1].scores = new Array();
scores.rounds[1].scores.push(new Score("Montreal", 2));
scores.rounds[1].scores.push(new Score("Tampa Bay", 4));
scores.rounds[1].scores.push(new Score("NY Rangers", 4));
scores.rounds[1].scores.push(new Score("Washington", 3));
scores.rounds[1].scores.push(new Score("Chicago", 4));
scores.rounds[1].scores.push(new Score("Minnesota", 0));
scores.rounds[1].scores.push(new Score("Anaheim", 4));
scores.rounds[1].scores.push(new Score("Calgary", 1));

scores.rounds[2] = new Object();
scores.rounds[2].scores = new Array();
scores.rounds[2].scores.push(new Score("NY Rangers", 3));
scores.rounds[2].scores.push(new Score("Tampa Bay", 3));
scores.rounds[2].scores.push(new Score("Anaheim", 3));
scores.rounds[2].scores.push(new Score("Chicago", 2));
	
	
/*scores.rounds[2] = new Object();
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
