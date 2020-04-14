let cities = [];

function initializeCityDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities[0].foods = ["Wiener Schnitzel"];
      cities[1].foods = ["Mofongo"];
      resolve();
    }, 100);
  });
}

function isCity(name) {
  return cities.map(city => city.name).includes(name);
}

function isValidCityFoodPair(name, food) {
  const city = cities.find(city => city.name === name);

  if (!city || !city.foods) {
    return false;
  };
}

// Applies to all tests in this file
beforeEach(() => {
  return initializeCityDatabase();
});

it('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

it('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 sausage', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});