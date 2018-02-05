//1 
console.log(hello);
var hello = 'world';
//should print undefined. 

//2
var needle = 'haystack';
test();

function test(){
	var needle = 'magnet';
	console.log(needle);
}
//should print 'magnet'

//3 
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//should print super cool

//4 
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//should print chicken half-chicken 

//5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// should break 

//6 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//should print undefined rock r&b disco 

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
//should print san jose, seattle, burbank, san jose 