/* exported defaults */
// input: 'target' which is an object, 'source' which is an object
// output: no return, the function assigns properties of source object to the target object
// for all properties that are not defined on target

// for each property of source,
//    check each property in target
//      if it matches, do not update target, continue to next property of source
//      if it does not match, move to the next property of source
//      if you have checked each property of the object, update the target

// function defaults(target, source) {
//   var i = 0;
//   for (var sourceKey in source) {
//     for (var targetKey in target) {
//       if (sourceKey === targetKey) {
//         break;
//       } else if (sourceKey !== targetKey && i === target.length - 1) {
//         target[sourceKey] = source[sourceKey];
//       } else if (sourceKey !== targetKey) {
//         i++;
//       }
//     }
//   }
// }

// create copy of target object
// add all properties of source to target
// compare targetCopy to target and replace any properties that match with the value from targetCopy

// function defaults(target, source) {
//   var targetCopy = {};
//   for (var targetKey in target) {
//     targetCopy[targetKey] = target[targetKey];
//   }
//   for (var sourceKey in source) {
//     target[sourceKey] = source[sourceKey];
//   }
//   for (var targetCopyKey in targetCopy) {
//     for (targetKey in target) {
//       if (targetKey === targetCopyKey) {
//         target[targetKey] = targetCopy[targetCopyKey];
//       }
//     }
//   }
// }

function defaults(target, source) {
  for (var sourceKey in source) {
    if (target[sourceKey] === undefined) {
      target[sourceKey] = source[sourceKey];
    }
  }
}
