// test("Não deveria passar!", () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!')
//   }, 500);
// });

test("Deveria passar!", done => {
  setTimeout(() => {
    expect(10).toBe(10);
    console.log('Deveria falhar!')
    done();
  }, 500);
});

function sum(a, b){
  return a + b
}

test('soma 1 e 2 para dar 3', () => {
   expect(sum(1, 2)).toEqual(3)
})

const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500)
}

test('Testando SumNumbers, soma 5 mais 10', done => {
  SumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
})
