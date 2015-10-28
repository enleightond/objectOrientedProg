var cat = function (firstName, tiredness, hungry, loneliness, happiness) {
	this.firstName = firstName
	this.tiredness = tiredness 
	this.hungry = hungry
	this.loneliness = lonliness
	this.happiness = happiness
}
cat.prototype.sleep = function(tiredness) {
  	if (tiredness.status = 0) {
  		console.log("sleepytime")		
	} else {
		console.log("playtime!")
	}
  }
cat.prototype.feed = function() {
	
		
	}
cat.prototype.pet = function() {
	
		
	}
cat.prototype.purr = function() {
	

	}

}

console.log(cat);