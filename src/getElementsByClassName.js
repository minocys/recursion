// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
<<<<<<< HEAD
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
=======
var getElementsByClassName = function(className, node){
  // your code here
  var result = [];
  node = node || document.body;

  var split = node.className.split(' ');
  if( split.indexOf( className ) >= 0 ){
    result.push(node);
  }

  //iterate
  for ( var x = 0; x < node.children.length; x++ ){
    var childResults = getElementsByClassName(className, node.children[x]);
    result = result.concat(childResults);
  }

  return result;

};
>>>>>>> temporarywork
