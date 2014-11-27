// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var result = [];
  if(obj === null){
  	return 'null';
  }
  console.log(obj);

  var type = typeof(obj);
  console.log(type);
  switch (type) {
  	case 'string':
  		result.push('"' + obj + '"');
  		break;
  	case 'number':
  		result.push(obj.toString());
  		break;
  	case 'boolean':
  		result.push(obj.toString());
  		break;
  	case 'object':

  		//test if object is an array
  		if(obj.length !== undefined){
  			//is object empty?
  			if(obj.length === 0){
  				result.push('[]');
  				break;
  			}
  			var temp = '[';
  			for(var i = 0; i < obj.length; i++){
  				temp += stringifyJSON(obj[i]) + ',';
  			}
  			temp = temp.substring(0, temp.length-1) + ']';
  			result.push(temp);
  			break;
  		}

  		//moving on to objects
  		//first check if object is empty
  		if(Object.keys(obj).length === 0){
  			result.push('{}');
  			break;
  		}

  		var temp ='{'
  		for(var item in obj){
  			if(obj.hasOwnProperty(item)){
          //checking for null objects and functions
          if(obj[item]===undefined || (typeof (obj[item]) === 'function' && !obj[item].arguments)){
            console.log('its empty!');
            break;
          }
  				temp +='"' + item + '":' + stringifyJSON(obj[item]) + ",";
  				console.log('erhherherherher'); 
  				console.log(obj[item]);
  			} else{
  				temp += stringifyJSON(item) + ",";
  			}
  		}
      (temp.length === 1) ? (temp += '}') : (temp = temp.substring(0, temp.length-1) + '}');
  		result.push(temp);
  		break;
    case 'function':
      result.push(obj.toString());
      break;
  	default:
  		result.push('null');
  }
  var res = result.join(',');
  console.log(res +' is result of stringify');
  return res;
};
