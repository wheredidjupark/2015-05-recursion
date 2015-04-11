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
		return "\""+obj+"\"";
		break;
	case("boolean"):
		return obj.toString();
		break;
	case("undefined"):
		return "";
		break;
	case("symbol"):
		return "";
		break;
	case("function"):
		return "";
		break;
	case("object"):
//put everything here
 	//null
  	if(obj === null) {
  		return 'null';
  	}

  	//Array

  	if(Array.isArray(obj)) {
  		var obj_cpy = obj;
  		var result = '';
  			for (var i = 0; i<obj_cpy.length;i++){
  				if (i > 0){
  					result += ',';
  				}
  				result += stringifyJSON(obj_cpy[i]);
  			}
  		return "["+ result +"]";
 /*
  		var result ='';

  		if(obj.length ===1){
  			result += stringifyJSON(obj[0]);
   		  console.log(result);

  		}
  		if(obj.length >1){

  		for(var i=0; i < obj.length -1;) {
  			result = result + stringifyJSON(obj[i]) +',';
  			i++;
  			if(i===obj.length-1){
  				result=result+obj[obj.length-1];
  			}
  		}
  		

  		}




  		return '[' +result + ']';
*/
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
  		var index = 0;
  		for(var key in obj){
  			if(stringifyJSON(obj[key]) !== ""){

  			result += stringifyJSON(key) + ":" + stringifyJSON(obj[key]); 
  			if(index < Object.keys(obj).length-1) {
  				result += ","
  			}
  			index++;
  			}


  		}

  	   return "{" +result +"}";
}
	default:
		break;

  }




//return JSON.stringify(obj);
};
