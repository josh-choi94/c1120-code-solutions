// create variable to store array w 3 objec literals.

var books = [
    {
      isbn: '1234567',
      title: 'my book',
      author: 'josh choi'
    },
    {
      isbn: '000001',
      title: 'hello-book',
      author: 'author'
    },
    {
      isbn: '000000',
      title: 'book',
      author: 'author'
    }
  ];
  
  console.log('books:', books);
  console.log('type of books:', typeof books);
   
  console.log('json stringify:', JSON.stringify(books));

  
  var student = '{"numberId": "7", "name": "Josh"}';
  
  console.log('student:', (student));
  console.log('type of students:', (typeof student));
  

  
  var newStudent = JSON.parse(student);
  console.log('json.parse:', newStudent);
  console.log('type of newstudent:', typeof newStudent);