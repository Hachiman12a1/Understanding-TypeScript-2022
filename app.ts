const person = {
  name: "Dat",
  age: 30,
  hobbies : ['Football', 'Anime'], 
  role : [2, "author"]
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
