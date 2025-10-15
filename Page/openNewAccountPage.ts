import { expect, Page } from "@playwright/test";


export class OpenNewAccountPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openSavingsAccount(type: string) {
    const validTypes = ['SAVINGS', 'CHECKING'];
    if (!validTypes.includes(type)) {
      throw new Error(`Invalid account type: ${type}. Valid types are: ${validTypes.join(', ')}`);
    }
    await this.page.locator('select[id="type"]').selectOption(type.toUpperCase());
    await this.page.waitForResponse(response => response.url().includes('/accounts') && response.status() === 200);
    await this.page.locator('input[type="button"]').click();
    await this.validateNewAccountCreated();

    const idLink = this.page.locator('#newAccountId');
    await expect(idLink).toBeVisible();
    const accountIdText = (await idLink.innerText()).trim();

    const accountId = accountIdText || ((await this.page.locator('#openAccountResult').innerText())
      .match(/account number:\s*(\d+)/i)?.[1] ?? '');
    if (!accountId) {
      throw new Error('Could not extract the new account number.');
    }
    return accountId;
  }

  async openCheckingAccount(type: string) {
    const validTypes = ['SAVINGS', 'CHECKING'];
    if (!validTypes.includes(type)) {
      throw new Error(`Invalid account type: ${type}. Valid types are: ${validTypes.join(', ')}`);
    }
    await this.page.locator('select[id="type"]').selectOption(type.toUpperCase());
    await this.page.locator('input[value="Open New Account"]').click();
    await this.validateNewAccountCreated();
  }

  private async validateNewAccountCreated() {
    await expect(this.page.locator('[id="openAccountResult"] h1[class="title"]')).toHaveText('Account Opened!');
    await expect(this.page.locator('[id="openAccountResult"] p').first()).toHaveText('Congratulations, your account is now open.');
  }
}