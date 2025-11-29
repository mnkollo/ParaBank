import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async login(username: string, password: string) {
    await this.page.locator('[name="username"]').fill(username);
    await this.page.locator('[name="password"]').fill(password);
    await this.page.locator('input[value="Log In"]').click();
  }

  async logout() {
    const welcomeMessage = this.page.locator('#leftPanel p', { hasText: 'Welcome' });
    if (await welcomeMessage.isVisible()) {
      await this.page.locator('a', { hasText: 'Log Out' }).click();
    }
  }

  async navigateToRegisterPage() {
    await this.page.locator('a', { hasText: 'Register' }).click();
  }

  async navigateToOpenNewAccountPage() {
    await this.page.locator('a', { hasText: 'Open New Account' }).click();
  }

  async navigateToAccountOverviewPage() {
    await this.page.locator('a', { hasText: 'Accounts Overview' }).click();
  }

  async navigateToTransferFundsPage() {
    await this.page.locator('a', { hasText: 'Transfer Funds' }).click();
  }

  async navigateToBillPayPage() {
    await this.page.locator('a', { hasText: 'Bill Pay' }).click();
  }

  async navigateToFindTransactionsPage() {
    await this.page.locator('a', { hasText: 'Find Transactions' }).click();
  }

  async navigateToUpdateContactInfoPage() {
    await this.page.locator('a', { hasText: 'Update Contact Info' }).click();
  }

  async navigateToRequestLoanPage() {
    await this.page.locator('a', { hasText: 'Request Loan' }).click();
  }
  async navigateToCustomerLookupPage() {
    await this.page.locator('a', { hasText: 'Forgot login info?' }).click();
  }
}