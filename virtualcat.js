var cat = function (f, t, h, l, ha) {
	this.firstName = f
	this.tiredness = t
	this.hungry = h
	this.loneliness = l
	this.happiness = ha
}
	
cat.prototype.sleep = function(tiredness) {
  	if (this.tiredness <= 4) {
  		console.log("sleepytime")
  		this.tiredness++
	} else if (this.tiredness >=5) {
		console.log("playtime!")
	} else {
		console.log("MEow!")
	}
  }
cat.prototype.feed = function(hungry) {
	if (this.hungry <= 4) {
  		console.log("dinnertime")
  		this.hungry++		
	} else if (this.hungry >=5) {
		console.log("playtime!")
	} else {
		console.log("MEow!")
	}
  }
cat.prototype.pet = function(loneliness) {
	if (this.loneliness <= 4) {
  		console.log("cuddletime")
  		this.loneliness++		
	} else if (this.loneliness >=5) {
		console.log("playtime!")
	} else {
		console.log("MEow!")
	}
  }
cat.prototype.purr = function(happiness) {
	if (this.happiness <= 2) {
  		console.log("playtime")
  		this.happiness++		
	} else if (this.happiness >=3){
		console.log("alooftime!")
	} else {
		console.log("MEow!")
	}
  }
var loki = new cat ("Loki", 1,0,1,0)

console.log(cat);

