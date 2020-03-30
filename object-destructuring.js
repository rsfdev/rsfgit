const student = {name : "Roger", 
age : "45", 
email : "roger_faustino@hotmail.com"
};

console.log(student.name);
console.log(student.age);
console.log(student.email);

// destructuring
const {name, age, email} = student;
console.log(name);
console.log(age);
console.log(email);


const json = {a : "Matheus", 
              b : "23", 
              c : "matheushcastiglioni@gmail.com"
              };

const {a:name1, b:age1, c:email1} = json;
console.log(name1);
console.log(age1);
console.log(email1);


// function imprimeDadosDoAluno(student2) {
//   console.log(student2.name2);
//   console.log(student2.age2);
//   console.log(student2.email2);
// }
// imprimeDadosDoAluno(student2);

// // destructuring
// function imprimeDadosDoAluno({name3, age3, email3}) {
//   console.log(name3);
//   console.log(age3);
//   console.log(email3);
// }
// imprimeDadosDoAluno(student3)
