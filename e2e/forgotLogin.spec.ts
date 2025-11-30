import { test } from '@playwright/test';
import { fakeUser } from '../Utils/fakerData';
import { CustomerLookupPage } from '../Page/customerLookupPage';
import { HomePage } from '../Page/homePage';

test.describe('Forgot Login Scenerios', () => {

      test.beforeEach(async ({ page }) => {
            await page.goto('https://parabank.parasoft.com/parabank/register.htm');
      });

      test('Verify unable to register successfully with invalid data', async ({ page }) => {
            const homePage = new HomePage(page);
            const customerLookupPage = new CustomerLookupPage(page);
            await homePage.navigateToCustomerLookupPage();
            await customerLookupPage.fillUpCustomerLookupForm(fakeUser.firstName, fakeUser.lastName, fakeUser.address, fakeUser.city, fakeUser.state, fakeUser.zipCode, fakeUser.phoneNumber, fakeUser.ssn, fakeUser.username, fakeUser.password);
      });

      test('should not register successfully with no state', async ({ page }) => {
            const homePage = new HomePage(page);
            const customerLookupPage = new CustomerLookupPage(page);
            await homePage.navigateToCustomerLookupPage();
            await customerLookupPage.fillUpCustomerLookupForm(fakeUser.firstName, fakeUser.lastName, fakeUser.address, fakeUser.city, '', fakeUser.zipCode, fakeUser.phoneNumber, fakeUser.ssn, fakeUser.username, fakeUser.password);
      });

      test('should not register successfully with no ssn', async ({ page }) => {
            const homePage = new HomePage(page);
            await homePage.navigateToCustomerLookupPage();

            const customerLookupPage = new CustomerLookupPage(page);
            await customerLookupPage.fillUpCustomerLookupForm(fakeUser.firstName, fakeUser.lastName, fakeUser.address, fakeUser.city, fakeUser.state, fakeUser.zipCode, fakeUser.phoneNumber,'', fakeUser.username, fakeUser.password);
      });

});