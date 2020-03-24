const assert = require('assert');

const buildPhrase = (text) => `Tryber ${text} aqui!`;

const text = 'Tryber FOO aqui!';

assert.strictEqual(buildPhrase('FOO'), text);

const skillsText = ['Javascript', 'HTML'];

const skills = ['Javascript', 'HTML'];

const buildSkillsPhrase = (skills) => {

}

assert.strictEqual(buildSkillsPhrase(skills), skillsText);
