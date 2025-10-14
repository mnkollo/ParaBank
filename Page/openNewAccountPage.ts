import { expect, Page } from "@playwright/test";


export class OpenNewAccountPage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async openSavingsAccount(savings: string) {
    await this.page.locator('select[id="type"]').selectOption(savings);
    await this.page.waitForResponse(response => response.url().includes('/accounts') && response.status() === 200);
    await this.page.locator('input[value="Open New Account"]').click();
    expect(this.page.locator('[id="openAccountResult"] h1[class="title"]')).toHaveText('Account Opened!');
    expect(this.page.locator('[id="openAccountResult"] p').first()).toHaveText('Congratulations, your account is now open.');

  }

  async openCheckingAccount(){
    await this.page.locator('select[id="type"]').selectOption('CHECKING');
    await this.page.locator('input[value="Open New Account"]').click();
  }
}