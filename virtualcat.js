var cat = function (firstName, tiredness, hungry, loneliness, happiness) {
	this.firstName = firstName
	this.tiredness = tiredness 
	this.hungry = hungry
	this.loneliness = lonliness
	this.happiness = happiness
}
cat.prototype.firstName = function(firstName)
	
cat.prototype.sleep = function(tiredness) {
  	if (tiredness.status = 0) {
  		console.log("sleepytime")		
	} else {
		console.log("playtime!")
	}
  }
cat.prototype.feed = function(hungry) {
	if (tiredness.status = 0) {
  		console.log("dinnertime")		
	} else {
		console.log("playtime!")
	}
  }
cat.prototype.pet = function(loneliness) {
	if (tiredness.status = 0) {
  		console.log("cuddletime")		
	} else {
		console.log("playtime!")
	}
  }
cat.prototype.purr = function(happiness) {
	if (tiredness.status = 0) {
  		console.log("playtime")		
	} else {
		console.log("alooftime!")
	}
  }
var loki = new cat ("Loki" 1,0,1,0,)

console.log(cat);

