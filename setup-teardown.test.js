let cities = [];

function initializeCityDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities.push('Vienna');
      cities.push('San Juan');
      resolve();
    }, 100);
  });
}

function clearCityDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities = [];
      resolve();
    }, 100);
  });
}

function isCity(name) {
  return cities.includes(name);
}

beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  return clearCityDatabase();
});

it('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

it('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

it('has only two cities', () => {
  expect(cities.length).toBe(2);
});
