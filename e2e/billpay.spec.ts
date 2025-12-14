import { test } from '@playwright/test';
import { fakeUser } from '../Utils/fakerData';
import { BillPaymentServicePage } from '../Page/billPaymentServicePage';
import { HomePage } from '../Page/homePage';

test.describe('Bill Pay Scenerios', () => {

      test.beforeEach(async ({ page }) => {
            await page.goto('https://parabank.parasoft.com/parabank/register.htm');
      const homePage= new HomePage(page)
      await homePage.login('wells@gmail.com','wells2394')
      });

      test('Verify unable to register successfully with invalid data', async ({ page }) => {
            const homePage = new HomePage(page);
            const billPaymentServicePagePage = new BillPaymentServicePage(page);
            await homePage.navigateToBillPayPage();
            await billPaymentServicePagePage.fillUpBillPaymentService(`${fakeUser.firstName + ' '+ fakeUser.lastName}`, fakeUser.address, fakeUser.city, fakeUser.state, fakeUser.zipCode, fakeUser.phoneNumber, fakeUser.account, fakeUser.account, fakeUser.amount);
      });

      test('should not register successfully with no state', async ({ page }) => {
            const homePage = new HomePage(page);
            const billPaymentServicePage = new BillPaymentServicePage(page);
            await homePage.navigateToBillPayPage();
            await billPaymentServicePage.fillUpBillPaymentService(`${fakeUser.firstName + ' '+ fakeUser.lastName}`, fakeUser.address, fakeUser.city, fakeUser.state, fakeUser.zipCode, fakeUser.phoneNumber, fakeUser.account, fakeUser.account, fakeUser.amount);
      });

      test('should not register successfully with no amount', async ({ page }) => {
            const homePage = new HomePage(page);
            await homePage.navigateToBillPayPage();

            const billPaymentServicePage = new BillPaymentServicePage(page);
            await billPaymentServicePage.fillUpBillPaymentService(`${fakeUser.firstName + ' '+ fakeUser.lastName}`, fakeUser.address, fakeUser.city, fakeUser.state, fakeUser.zipCode, fakeUser.phoneNumber, fakeUser.account, fakeUser.account, fakeUser.amount);
      });
});