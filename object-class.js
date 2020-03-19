const comic1 = {
  collection: 'littlePaws',
  title: 'Treasure',
};

console.log(comic1.collection);
console.log(comic1.title);

comic1.author = 'Don';
comic1['publishingCompany'] = 'April';

console.log(comic1);
console.log(Object.keys(comic1));
console.log(Object.values(comic1));
console.log(Object.entries(comic1));
console.log(Object.values(comic1).includes('littlePaws'));

const object = {
  key1: 'My value 1',
  key2: 'My value 2',
};

console.log(object);

object.key3 = 'My value 3';

console.log(object);

object.key2 = 'My value 22';

console.log(object);

const comic2 = {
  collection: 'New',
  title: 'New',
};

const authorObject = { author: 'New author' };
Object.assign(comic2, authorObject);

console.log(comic2);

const comic2Clone = Object.assign({}, comic2);

comic2.title = 'Another title';

console.log(comic2);
console.log(comic2Clone);
