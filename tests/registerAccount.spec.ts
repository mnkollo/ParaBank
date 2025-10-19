import { test, expect } from '@playwright/test';
import { RegisterPage } from '../Page/registerPage';
import { fakeUser } from '../Utils/fakerData';
import { HomePage } from '../Page/homePage';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.BASE_URL!);
  await expect(page).toHaveTitle(/ParaBank/);
});

test('Register User', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const onHomePage = new HomePage(page);

  await onHomePage.logout();
  await onHomePage.navigateToRegisterPage();
  await registerPage.fillUpRegistrationForm(fakeUser.firstName, fakeUser.lastName, fakeUser.address, fakeUser.city, fakeUser.state, fakeUser.zipCode, fakeUser.phoneNumber, fakeUser.ssn, fakeUser.username, fakeUser.password);
});