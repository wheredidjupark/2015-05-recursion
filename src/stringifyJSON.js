// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  "use strict";
  
  if(obj === undefined){
  	return "";
  }
  
  switch( typeof(obj) ) {
  	case("number"):
  		return obj.toString();
  		break;
	case("string"):
		return ("\""+obj+"\"");
		break;
	case("boolean"):
		return obj.toString();
		break;
	case("undefined"):
		break;
	case("symbol"):
		break;
	case("function"):
		break;
	default:
		break;

  }

  if(typeof obj === "object") {
  	
  	//null
  	if(obj === null) {
  		return "null";
  	}

  	//Array

  	if(Array.isArray(obj)) {
 
  		var result ="";

  		if(obj.length >1){

  		for(var i=0; i < obj.length -1;) {
  			result = result + stringifyJSON(obj[i]) +",";
  			i++;
  			if(i===obj.length-1){
  				result=result+obj[obj.length-1];
  			}
  		}
  		

  		}

  		if(obj.length ===1){
  			result = stringifyJSON(obj[0]);
  		}

  		return "[" +result + "]";

/*
  		if(obj.length > 1){
  			var temp = stringify(obj.shift());
  			result = temp + "," + stringifyJSON(obj);
  		}
  		else
  		{
  			result = result + stringifyJSON(obj);
  		}

  		return "["+result+"]";
  		*/
  	}


/*
  	//Object
  		var result = "";
  		var arr = Object.keys(obj);
  		result += arr[0];
  		result += obj[arr[0]];
  		delete obj[arr[0]]; //remove the obj's key and its respective key value
  		*/
  		else{
  		var result ="";

  		for(var key in obj){
  			result += key + ":" + stringifyJSON(obj[key]) +",";
  		}

  	   return "{ " +result + "}";
}

  }



//return JSON.stringify(obj);
};
