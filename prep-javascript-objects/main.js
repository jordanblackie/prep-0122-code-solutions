var person = {
  firstName: 'John',
  lastName: 'Smith',
  hobby: 'Fishing',
  job: 'Shark wrangler',
  previousJob: 'Shark tamer'

};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
var job = person.job;
var previousJob = person.previousJob;

console.log('The person\'s name is: ', fullName);
console.log('The person\'s current is: ', job);
console.log('The person\'s previous job was: ', previousJob);
console.log('The complete person object: ', person);

// var firstName = person.firstName;
// var lastName = person.lastName;
// var hobby = person.hobby;

// console.log('firstName:', person.firstName);
// console.log('lastName:', person.lastName);
// console.log('hobby:', person.hobby);
