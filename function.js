
function functionname(sum) {
    return ++sum;
}

function sum1(a, b) {
    return a+b;
}

console.log(functionname(10));
console.log(sum1(1, 2));

function averages(grade1, grade2, grade3) {
    return (grade1+grade2+grade3)/3;
}

let person = {
    name: "Roger",
    age: 46,
    occupation: "Engineer",
}

function newperson(name, age, occupation) {
    person.name = name;
    person.age = age;
    person.occupation = occupation;
}

function newperson(newObjectPerson) {
    person = newObjectPerson;
    return newObjectPerson;
}

function testingparameters() {
    console.log(arguments);
    return true;
}


