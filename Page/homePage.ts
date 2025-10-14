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
    await this.page.locator('a', { hasText: 'Log Out' }).click();
  }

  async registerPage() {
    await this.page.locator('a', { hasText: 'Register' }).click();
  }

  async openNewAccountPage() {
    await this.page.locator('a', { hasText: 'Open New Account' }).click();
  }

  async accountOverviewPage() {
    await this.page.locator('a', { hasText: 'Accounts Overview' }).click();
  } 

  async transferFundsPage() {
    await this.page.locator('a', { hasText: 'Transfer Funds' }).click();
  }

  async billPayPage() {
  await this.page.locator('a', { hasText: 'Bill Pay' }).click();
  }

  async findTransactionsPage() {
    await this.page.locator('a', { hasText: 'Find Transactions' }).click();
  }

  async updateContactInfoPage() {
    await this.page.locator('a', { hasText: 'Update Contact Info' }).click();
  }
  
  async requestLoanPage() {
    await this.page.locator('a', { hasText: 'Request Loan' }).click();
  }
}