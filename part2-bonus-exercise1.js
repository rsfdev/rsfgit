Copiar
const getNumberOfStudentsMath = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    if(obj[array[i]].materia === 'Matemática'){
    total += obj[array[i]].numeroAlunos;
    }
  }
  return total;
}
console.log(getNumberOfStudents(allLessons));
