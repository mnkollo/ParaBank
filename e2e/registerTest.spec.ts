import { test } from '@playwright/test';
import { RegisterPage } from '../Page/registerPage';
import { fakeUser } from '../Utils/fakerData';


test.describe('Register Scenarios', () => {

     test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  });

  test('Verify Unable to register successfully with invalid data', async ({ page }) => {

        const registerPage = new RegisterPage(page);
        await registerPage.fillUpRegistrationForm(fakeUser.firstName, fakeUser.lastName, fakeUser.address, fakeUser.city, fakeUser.state, fakeUser.zipCode, fakeUser.phoneNumber, fakeUser.ssn, fakeUser.username, fakeUser.password);
  });
  test('Verify unable to register without SSN', async ({ page }) => {

        const registerPage = new RegisterPage(page);
        await registerPage.fillUpRegistrationForm(fakeUser.firstName, fakeUser.lastName, fakeUser.address, fakeUser.city, fakeUser.state, fakeUser.zipCode, fakeUser.phoneNumber, '', fakeUser.username, fakeUser.password);
  });
  test('Verify unable to register without address', async ({ page }) => {

        const registerPage = new RegisterPage(page);
        await registerPage.fillUpRegistrationForm(fakeUser.firstName, fakeUser.lastName, '', fakeUser.city, fakeUser.state, fakeUser.zipCode, fakeUser.phoneNumber, fakeUser.ssn, fakeUser.username, fakeUser.password);
  });
  test('Verify unable to register without phone number', async ({ page }) => {

        const registerPage = new RegisterPage(page);
        await registerPage.fillUpRegistrationForm(fakeUser.firstName, fakeUser.lastName, fakeUser.address, fakeUser.city, fakeUser.state, fakeUser.zipCode, '', fakeUser.ssn, fakeUser.username, fakeUser.password);
  });
   test('Verify unable to register without valid first name', async ({ page }) => {

        const registerPage = new RegisterPage(page);
        await registerPage.fillUpRegistrationForm('', fakeUser.lastName, fakeUser.address, fakeUser.city, fakeUser.state, fakeUser.zipCode, fakeUser.phoneNumber,fakeUser.ssn, fakeUser.username, fakeUser.password);
  });
});