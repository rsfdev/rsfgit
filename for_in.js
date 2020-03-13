

let person = {
    name: 'Terry',
    age: 30
};

for (let key in person) {
    console.log(key);
    console.log(key, person);
    console.log(key, person.name);
    console.log(key, person['name']);
};


let colors = ['red', 'blue', 'green'];

for (let index in colors) {
    console.log(index, colors[index]);
};
