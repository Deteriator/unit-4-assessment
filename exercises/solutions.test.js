const solutions = require('./solutions');

// Question 1
test('Question 1', () => {
  const myAccount = solutions.makeAccount(100);
  expect(myAccount.checkBalance()).toBe(100);
  expect(myAccount.add(50)).toBe("50 added");
  expect(myAccount.checkBalance()).toBe(150);
  expect(myAccount.subtract(30)).toBe("30 subtracted");
  expect(myAccount.checkBalance()).toBe(120);
});

// Question 2
test('Question 2', () => {
  const myAccount = new solutions.SavingsAccount('Reuben');
  expect(myAccount.name).toBe('Reuben');
  expect(myAccount.showBalance()).toBe('$0');
  expect(myAccount.depositFunds(100)).toBe('$100 Deposited');
  expect(myAccount.showBalance()).toBe('$100');
  expect(myAccount.depositFunds(-100)).toBe('Please include a deposit amount that is greater than 0');
  expect(myAccount.showBalance()).toBe('$100');
  expect(myAccount.withdrawFunds(75)).toBe('$75 withdrawn');
  expect(myAccount.showBalance()).toBe('$25');
  expect(myAccount.withdrawFunds(26)).toBe('Insufficient Funds');
  expect(myAccount.showBalance()).toBe('$25');
});

// Question 3
test('Question 3', () => {
  const myPhone = new solutions.Phone('3448731233');
  expect(myPhone.addContact({name: "Reuben", phoneNumber: '3462217541'})).toBe('Reuben added.');
  expect(myPhone.contacts).toEqual([{name: "Reuben", phoneNumber: '3462217541'}]);
  expect(myPhone.addContact({phoneNumber: '3461124321'})).toBe('Invalid');
  expect(myPhone.addContact({name: "Reuben", phoneNumber: '346'})).toBe('Invalid');
  expect(myPhone.addContact({name: "Peter", phoneNumber: '3499217541', extraData: 'is perfectly fine'})).toBe('Peter added.');
  expect(myPhone.contacts).toEqual([{name: "Reuben", phoneNumber: '3462217541'}, {name: "Peter", phoneNumber: '3499217541', extraData: 'is perfectly fine'}]);
  expect(myPhone.removeContact('Reuben')).toBe('Reuben removed.');
  expect(myPhone.contacts).toEqual([{name: "Peter", phoneNumber: '3499217541', extraData: 'is perfectly fine'}]);
  expect(myPhone.removeContact('Paul')).toBe('Contact not found.');
  expect(myPhone.call('Peter')).toBe('Contact not found.');
  expect(myPhone.call('3499217541')).toBe('Calling Peter...');
  expect(myPhone.call('1234567890')).toBe('Calling 1234567890');
  expect(myPhone.call('888')).toBe('Invalid');
  expect(myPhone.call('Paul')).toBe('Invalid');
});

// Question 4
test('Question 4', () => {
  const reubenPhone = new solutions.AppleiPhone('2234432211', 'iPhone 14');
  const mayasPhone = new solutions.AppleiPhone('3349987745', 'iPhone 6');
  const devontesPhone = new solutions.Phone('9932103000');
  expect(reubensPhone instanceof solutions.Phone).toBe(true);  
  expect(reubensPhone instanceof solutions.AppleiPhone).toBe(true);  
  expect(reubensPhone.sendiMessage(mayasPhone, 'Hey friend!')).toBe('Message sent.');
  expect(mayasPhone.sendiMessage(reubensPhone, 'Hey!')).toBe('Message sent.');
  expect(reubensPhone.sendiMessage(devontesPhone, 'DYFR!')).toBe('Message could not be sent.');
  expect(mayasPhone.sendiMessage(devontesPhone, '☀️')).toBe('Message could not be sent.');
});

// Question
test('Question 5', () => {
  const person = new solutions.Person();
  const student = new solutions.Student();
  const gradStudent = new solutions.Student();
  const doctor = new solutions.Doctor();
  const professor = new solutions.Professor();
  expect(student instanceof solutions.Person).toBe(true);
  expect(graduateStudent instanceof solutions.Person).toBe(true);
  expect(graduateStudent instanceof solutions.Person).toBe(true);
  expect(professor instanceof solutions.Person).toBe(true);
  expect(professor instanceof solutions.Doctor).toBe(false);
  expect(doctor instanceof solutions.Person).toBe(true);
  expect("invoice" in doctor).toBe(true);
  expect("payTax" in professor).toBe(true);
});
