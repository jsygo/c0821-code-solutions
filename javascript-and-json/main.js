var library = [
  {
    isbn: '123',
    title: 'book 1',
    author: 'bobby'
  },
  {
    isbn: '456',
    title: 'book 2',
    author: 'john doe'
  },
  {
    isbn: '789',
    title: 'book 3',
    author: 'jane doe'
  }
];

console.log('library:', library);
console.log('librarys type:', typeof library);

var libraryJson = JSON.stringify(library);

console.log('JSON String of library:', libraryJson);
console.log('type of JSON String of library:', typeof libraryJson);

var studentJson = '{"id":420,"name":"Joshua"}';
console.log('JSON String of student:', studentJson);
console.log('type of JSON String of student:', typeof studentJson);

var student = JSON.parse(studentJson);
console.log('student object:', student);
console.log('type of student:', typeof student);
