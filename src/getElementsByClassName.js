// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  
  var result = [];



  var containsClass = function(node, className){
  	if(node.classList === undefined){
  		return false;
  	}
  	else
  	{
  		var classList = node.classList;
  		var classListLength = classList.length;
  		for(var i=0; i < classListLength; i++){
  			if(classList[i] === className){
  				return true;
  			}
  		}
  		return false;
  	}
  };
  

var investigate = function(context, className){

if(context !== undefined){
  if(containsClass(context,className) ){
    result.push(context);
  }
}
else
{
  return;
}

var target = context.childNodes;

for(var i=0; i < target.length; i++){
  investigate(target[i] ,className);
  }
}

investigate(document.body, className); 
  //You should use document.body, element.childNodes, and element.classList
  //first target body as the target
  //then inspect each child node in the body
  	//change 
  	//change target as the child node 
  return result;
  
};
