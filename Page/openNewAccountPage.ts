import { expect, Page } from "@playwright/test";


export class OpenNewAccountPage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async openSavingsAccount(type: string ) {
    const validTypes = ['SAVINGS', 'CHECKING'];
    if (!validTypes.includes(type)) {
      throw new Error(`Invalid account type: ${type}. Valid types are: ${validTypes.join(', ')}`);
    }
    await this.page.locator('select[id="type"]').selectOption(type.toUpperCase());
    await this.page.waitForResponse(response => response.url().includes('/accounts') && response.status() === 200);
    await this.page.locator('input[type="button"]').click();
    await expect(this.page.locator('[id="openAccountResult"] h1[class="title"]')).toHaveText('Account Opened!');
    await expect(this.page.locator('[id="openAccountResult"] p').first()).toHaveText('Congratulations, your account is now open.');
  }

  async openCheckingAccount(){
    await this.page.locator('select[id="type"]').selectOption('CHECKING');
    await this.page.locator('input[value="Open New Account"]').click();
  }
}