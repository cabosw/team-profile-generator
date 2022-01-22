const Manager = require('../lib/Manager.js');

test ('Create manager object', () => {
  const manager= new Manager('leia', 1, "leia.email.com", 2);
  expect(manager.officeNumber).toEqual(expect.any(Number));
})