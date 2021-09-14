function ExampleConstructor() {}

console.log('prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var example = new ExampleConstructor();
console.log('example variable:', example);

var instanceofExampleConstructor = example instanceof ExampleConstructor;
console.log('example is an instance of ExampleConstructor:', instanceofExampleConstructor);
