const person = {
  firstName: 'Daniel',
  lastName: 'Cho',
  hobby: 'Hiking'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is:" + ' ' + fullName);

person.job = 'Full-stack Web Developer';

console.log("The person's current job is:" + ' ' + person.job);

person.previousJob = 'Real Estate Agent';

console.log("The person's previous job is:" + ' ' + person.previousJob);

console.log(person);
