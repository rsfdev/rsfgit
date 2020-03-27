const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    total += obj[array[i]].numeroAlunos;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));
