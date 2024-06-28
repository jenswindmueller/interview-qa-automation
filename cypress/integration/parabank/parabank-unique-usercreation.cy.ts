/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

import { UserInfo } from '../../fixtures/types'

const user: UserInfo = {
  name: faker.name.firstName(),
  lname: faker.name.lastName(),
  city: faker.address.cityName(),
  phone: faker.phone.number('############'),
  zipCode: faker.address.zipCode('#####'),
  email: faker.name.middleName(),
  state: faker.address.state(),
  street: faker.address.streetAddress(false),
  ssn: faker.phone.number('#####'),
}

describe('Parabank user details ', () => {
  let fixtureData: any;

  before(function () {
    cy.fixture('user').then(function (data) {
      fixtureData = data;
    })
  })
    
  it('Registers a new user', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.contains('Register').click()

    cy.get('input[name="customer.firstName"]').type(user.name)
    cy.get('input[name="customer.lastName"]').type(user.lname)
    cy.get('input[name="customer.address.street"]').type(user.street)
    cy.get('input[name="customer.address.city"]').type(user.city)
    cy.get('input[name="customer.address.state"]').type(user.state)
    cy.get('input[name="customer.address.zipCode"]').type(user.zipCode)
    cy.get('input[name="customer.phoneNumber"]').type(user.phone)
    cy.get('input[name="customer.ssn"]').type(user.ssn)
    cy.get('input[name="customer.username"]').type(user.email)
    cy.get('input[name="customer.password"]').type(fixtureData.password)
    cy.get('input[name="repeatedPassword"]').type('1234')

    cy.get('input[value="Register"]').click()

    cy.contains('Your account was created successfully. You are now logged in.')

    const createdUser = [{ username:user.email, password: fixtureData.password }];
    cy.writeFile('cypress/fixtures/createdUser.json', createdUser);
  })


  it('Logs in as the newly created user', () => {
    // ..
  })

  it('Transfers money from one bank account to another', () => {
    // ..
  })
})