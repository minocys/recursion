// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

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
