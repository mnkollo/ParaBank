import { test, expect } from '@playwright/test';
import { RegisterPage } from '../Page/registerPage';
import { fakeUser } from '../Utils/fakerData';
import { HomePage } from '../Page/homePage';
import { OpenNewAccountPage } from '../Page/openNewAccountPage';

let username: string;
let password: string;

test.beforeEach(async ({ page }) => {
  const onHomePage = new HomePage(page);
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await expect(page).toHaveTitle(/ParaBank/);
  await onHomePage.login('greenwood','Welcome!1')

});

test('Register User', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const homePage = new HomePage(page);
  username = fakeUser.username;
  password = fakeUser.password; 

  await homePage.logout();
  await homePage.registerPage();
  await registerPage.fillUpRegistrationForm(fakeUser.firstName, fakeUser.lastName, fakeUser.address, fakeUser.city, fakeUser.state, fakeUser.zipCode, fakeUser.phoneNumber, fakeUser.ssn, username, password);
});

test('Open New Savings Account', async ({ page }) => {
  const openNewAccountPage = new OpenNewAccountPage(page);
  const homePage = new HomePage(page);

  await homePage.openNewAccountPage();
  await openNewAccountPage.openSavingsAccount('SAVINGS');
});