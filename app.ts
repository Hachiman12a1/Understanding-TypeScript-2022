enum Role {ADMIN = 'ADMIN', USER = 'USER', AUTHOR = "AUTHOR"}

const person = {
  name: "Dat",
  age: 30,
  hobbies : ['Football', 'Anime'], 
  role : Role.ADMIN
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if(person.role == Role.ADMIN) {
    console.log('Role is Admin');
}
