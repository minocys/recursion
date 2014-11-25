// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var res = [];
	
	/* for testing
	var actual = document.getElementsByClassName(className);
	console.log(actual); 
	*/

	var gEBC = function(items){
		for(var i = 0; i < items.length; i++){
			var classes = items[i].classList;
			if(classes && classes.contains(className)){
				res.push(items[i]);
			}
			if(items[i].childNodes.length !== 0){
				gEBC(items[i].childNodes);
			}
		}
	}
	gEBC(document.childNodes);
	return res;
}
