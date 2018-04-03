var recipes = {pbj:["bread", "peanut butter", "jelly"]}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object, {[key]: value})
}