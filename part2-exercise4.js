const array = ["Javascript", "CSS3", "HTML5", "Architecture", "Swim"]

function buildSkillsPhrase (paramOne) {
  const fun1 = paramInner => (
    `Tryber ${paramInner} right here!
    Is everything alright?`
  )

  let result = `${fun1(paramOne)}

  My top five skills are:`

  array.forEach((skill, index) =>
  result = `${result}

  - ${skill}`)

  result = `${result} #goTrybe`

  return result
}

console.log(buildSkillsPhrase("Roger"))
