import { test } from '@playwright/test';
import { fakeUser } from '../Utils/fakerData';
import { CustomerLookupPage } from '../Page/customerLookupPage';

test.describe('Forgot Login Scenerios', () => {

      test.beforeEach(async ({ page }) => {
            await page.goto('https://parabank.parasoft.com/parabank/register.htm');
      });

      test('should register successfully with valid data', async ({ page }) => {

            const customerLookupPage = new CustomerLookupPage(page);
            await customerLookupPage.fillUpCustomerLookupForm(fakeUser.firstName, fakeUser.lastName, fakeUser.address, fakeUser.city, fakeUser.state, fakeUser.zipCode, fakeUser.phoneNumber, fakeUser.ssn, fakeUser.username, fakeUser.password);
      });

});