import { faker } from '@faker-js/faker';

export const fakeUser = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  zipCode: faker.location.zipCode(),
  phoneNumber: '1234567890',
  ssn: '123456789',
  username: `user${Date.now()}`,
  password: 'Password123!',
  account: faker.string.numeric(8),
  amount: `${faker.number.float({ min: 1, max: 9999}).toFixed(2)}`
}