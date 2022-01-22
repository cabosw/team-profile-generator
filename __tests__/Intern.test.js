const Intern = require('../lib/Intern.js');

test ('Create intern object with school property', () => {
  const intern = new Intern ('leia', 1, "leia@email.com", "college");
  expect(intern.school).toEqual(expect.any(String));
})