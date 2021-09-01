/* exported defaults */
// input: 'target' which is an object, 'source' which is an object
// output: no return, the function assigns properties of source object to the target object
// for all properties that are not defined on target

// check through each property of the source object
//    each time, check if each property of the target object is equal to that property
//        if it is, move to the next property of source
//        if it is not, add that property to target

function defaults(target, source) {
  var i = 0;
  debugger;
  for (var sourceKey in source) {
    for (var targetKey in target) {
      if (targetKey === sourceKey) {
        break;
      } else if (i === target.length - 1) {
        target[sourceKey] = source[sourceKey];
      }
      i++;
    }
  }
}
