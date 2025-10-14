import { faker } from '@faker-js/faker';

export const fakeUser = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  zipCode: faker.location.zipCode(),
  phoneNumber: '1234567890',
  ssn: '123-45-6789',
  username: `user${Date.now()}`,
  password: 'Password123!'
};