var recipes = {"Ingredient1":"Eggs", "Ingredient2":"Butter", "Ingredient3":"Flour"}
function updateObjectWithKeyAndValue(object, key, value){object[key] = value; return object}
updateObjectWithKeyAndValue(recipes,"Ingredient4","Chocolate")
function updateObjectWithKeyAndValue(object, key, value){return Object.assign({}, object, {key:value}) }
