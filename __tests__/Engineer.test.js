const Engineer = require('../lib/Engineer.js');

test ('github username added to Engineer object', () => {
  const engineer = new Engineer('leia', 1, "leia.email.com", "testGithub");
  expect(engineer.github).toEqual(expect.any(String));
});