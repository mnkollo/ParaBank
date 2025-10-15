import { test, expect } from '@playwright/test';
import { HomePage } from '../Page/homePage';
import { OpenNewAccountPage } from '../Page/openNewAccountPage';
import { AccountsOverviewPage } from '../Page/accountsOverviewPage';


let accountId: string;

test.describe.serial('Account creation flow', () => {

  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page);
    await page.goto(process.env.BASE_URL!);
    await expect(page).toHaveTitle(/ParaBank/);
    await home.login(process.env.USERNAME!, process.env.PASSWORD!);
  });

  test('Open New Savings Account', async ({ page }) => {
    const home = new HomePage(page);
    const open = new OpenNewAccountPage(page);

    await home.navigateToOpenNewAccountPage();
    accountId = await open.openSavingsAccount('SAVINGS');
  });

  test('Open New Checking Account', async ({ page }) => {
    const home = new HomePage(page);
    const open = new OpenNewAccountPage(page);

    await home.navigateToOpenNewAccountPage();
    await open.openCheckingAccount('CHECKING');
  });

  test('Validate New Account Created in Accounts Overview', async ({ page }) => {
    const home = new HomePage(page);
    const overview = new AccountsOverviewPage(page);

    await home.navigateToAccountOverviewPage();
    await overview.validateNewAccountCreated(accountId!);
  });
});
