const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Leia', 1, "email@email.com" );

  expect(employee.name).toBe('Leia');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual('email@email.com');
  
});