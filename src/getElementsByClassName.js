// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var res = [];

	var gEBC = function(items){
		for(var i = 0; i < items.length; i++){
			if(items[i].childNodes.length !== 0){
				gEBC(items[i].childNodes);
			}
			var x = items[i].classList;
			console.log(x);
		}
	}

	gEBC(document.body.childNodes);
	return res;
}
