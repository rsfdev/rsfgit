const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Does not have this kind os animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

describe('When there is the kind of animal', () => {
  it('Return the list of animals', async () => {
    expect.assertions(2);
    const listDogs = await getListAnimals('Dog');
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
    });
  it('Testing with async/await, testing the reject', async () => {
    expect.assertions(1);
    try {
      await getListAnimals('Lion');
    } catch (error) {
      expect(error).toEqual({ error: "Does not have this kind os animal." })
    }
  });
});

// describe format
describe('When there is the kind of animal', () => {
  it('Return the list of animals', () => {

  });
});
