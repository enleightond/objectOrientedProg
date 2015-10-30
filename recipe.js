var recipe = {
	"title" : "Mole",
	"serving" : 2,
	"ingredients" : ["cinnamon","cumin","cocoa"]
} 
console.log(recipe.title);
console.log("Serves: " + recipe.serving);
console.log("Ingredients: ");
for (var i = 0; i < recipe.ingredients.length; i++) {
	console.log(recipe.ingredients[i]);
}

