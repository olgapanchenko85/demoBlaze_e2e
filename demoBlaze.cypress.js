/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

const testData = {
  username: faker.person.firstName(),
  country: faker.location.country(),
  password: faker.internet.password(),
  alertMessage: 'Product added'
};

describe('Demoblaze', () => {
  it('should provide an ability to register new account', () => {
   
});
