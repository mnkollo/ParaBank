import { test } from '@playwright/test';
import { RegisterPage } from '../Page/registerPage';


test.describe('Register Scenarios', () => {

     test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  });

  // ✅ Positive Test 1: Successful registration
  test('should register successfully with valid data', async ({ page }) => {

        const registerPage = new RegisterPage(page);
        await registerPage.fillUpRegistrationForm("Michael", 'Smith', '123 main st', 'Fort Worth', 'TX', '76101', '8175551234', '123-45-6789', 'gregory', 'Password123!');
  });
  test('Verify unable to register without SSN', async ({ page }) => {

        const registerPage = new RegisterPage(page);
        await registerPage.fillUpRegistrationForm("Michael", 'Smith', '123 main st', 'Fort Worth', 'TX', '76101', '8175551234', '', 'testuser1!43892', 'Password123!');
  });
  test('Verify unable to register without address', async ({ page }) => {

        const registerPage = new RegisterPage(page);
        await registerPage.fillUpRegistrationForm("Michael", 'Smith', '', 'Fort Worth', 'TX', '76101', '8175551234', '123-45-6789', 'testuser1!43892', 'Password123!');
  });
});