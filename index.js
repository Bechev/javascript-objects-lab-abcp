var recipes={}

function updateObjectWithKeyAndValue(object, key, value){
  var tempObj= {[key]: value}
  var newObj =  Object.assign({}, object, tempObj)
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object,key){
  var newObj = delete object[key]
}
