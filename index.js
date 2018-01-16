var recipes={}

function updateObjectWithKeyAndValue(object, key, value){
var tempObj={prop2: value};
  var newObj =  Object.assign({}, object, tempObj)
  return newObj;
}
