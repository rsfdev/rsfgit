// array
const organizations = ['Pyke', 'Black Sun', 'Kanjiklub', 'Crimson Dawn'];
const [firstGang, secondGang, thirdGang, fourthGang] = organizations;

console.log(firstGang); // Outputs 'Pyke'
console.log(secondGang); // Outputs 'Black Sun'
console.log(thirdGang); // Outputs 'Kanjiklub'
console.log(fourthGang); // Outputs 'Crimson Dawn'

console.log('---')
const organizations1 = ['Pyke1', 'Black Sun', 'Kanjiklub', 'Crimson Dawn'];
const [firstGang1, secondGang1, ...theRest] = organizations1;

console.log(firstGang1); // Outputs 'Pyke'
console.log(secondGang1); // Outputs 'Black Sun'
console.log(theRest); // Outputs ['Kanjiklub', 'Crimson Dawn']

console.log('--- default values')
const organizations2 = ['Pyke', 'Black Sun'];
const [
  firstGang2 = 'First Order',
  secondGang2 = 'Resistance',
  thirdGang2 = 'New Republic'
] = organizations2;

console.log(firstGang2); // Outputs 'Pyke'
console.log(secondGang2); // Outputs 'Black Sun'
console.log(thirdGang2); // Outputs 'New Republic'

// object
console.log('--- object')
const planet = {
  name: 'Hosnian Prime',
  faction: 'New Republic',
  weather: 'Temperate'
};
const { name, faction, weather } = planet;

console.log(name); // Outputs 'Hosnian Prime'
console.log(faction); // Outputs 'New Republic'
console.log(weather); // Outputs 'Temperate'

console.log('--- names that differ from the keys')
const planet1 = {
  name: 'Hosnian Prime1',
  faction: 'New Republic1',
  weather: 'Temperate1'
};
const {
  name: system,
  faction: team,
  weather: conditions
} = planet1;

console.log(system); // Outputs 'Hosnian Prime'
console.log(team); // Outputs 'New Republic'
console.log(conditions); // Outputs 'Temperate'

console.log('--- default values')
const planet2 = {
  name2: 'Hosnian Prime2'
};
const {
  name2 = 'Unknown planet',
  faction2 = 'Unknown faction',
  weather2 = 'Unknown conditions'
} = planet2;

console.log(name2); // Outputs 'Hosnian Prime'
console.log(faction2); // Outputs 'Unknown faction'
console.log(weather2); // Outputs 'Unknown conditions'

console.log('--- common use cases')
function shipGenerator(options = {}) {
  const {
    cannons = 4,
    engines = 2,
    crew = 10
  } = options; // Default options
  
  return `This ship has ${cannons} cannons, ${engines} engines, and ${crew} crew members.`;
}

console.log(shipGenerator({ engines: 10, crew: 20 })); // Outputs 'This ship has 4 cannons, 10 engines and 20 crew members.'
console.log(shipGenerator({ cannons: 0 })); // Outputs 'This ship has 0 cannons, 2 engines and 10 crew members.'
console.log(shipGenerator()); // Outputs 'This ship has 4 cannons, 2 engines and 10 crew members.'
