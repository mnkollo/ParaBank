import { Page } from '@playwright/test';

export class AccountsOverviewPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validateNewAccountCreated(accountId: string){
    await this.page.locator('a').filter({ hasText: accountId.toString() }).isVisible();
  }
}